const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();

//////////////////// User schema ////////////////////
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// salt and hash plaintext password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password'))
    return next();

  try {
    const hash = await argon2.hash(this.password);
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// compare user hash and browser hash
userSchema.methods.comparePassword = async function(password) {
  try {
    const isMatch = await argon2.verify(this.password, password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

// delete password hash from object
userSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
}

//////////////////// user model ////////////////////
const User = mongoose.model('User', userSchema);

//////////////////// middleware ////////////////////

// check for logged-in users
const validUser = async (req, res, next) => {
  if (!req.session.userID)
    return res.status(403).send({
      message: "no user logged in"
    });
  try {
    const user = await User.findOne({
      _id: req.session.userID
    });
    if (!user) {
      return res.status(403).send({
        message: "no user logged in"
      });
    }
    req.user = user;
  } catch (error) {
    return res.status(403).send({
      message: "no user logged in"
    });
  }
  next();
};

// create new user
router.post('/', async (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password)
    return res.status(400).send({
      message: "first name, last name, email and password are required"
    });

  try {
    //  check to see if email already in use
    const existingUser = await User.findOne({
      email: req.body.email
    });
    if (existingUser)
      return res.status(403).send({
        message: "email already in use"
      });
    // create user and save
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    await user.save();
    // set user session info
    req.session.userID = user._id;

    // send back 200 and new user
    return res.send({
      user: user
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// login
router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.sendStatus(400);

  try {
    const user = await User.findOne({
      email: req.body.email
    });
    // user does not exist
    if (!user)
      return res.status(403).send({
        message: "email or password is wrong"
      });

    if (!await user.comparePassword(req.body.password))
      return res.status(403).send({
        message: "email or password is wrong"
      });
    // set user session info
    req.session.userID = user._id;

    return res.send({
      user: user
    });

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


// get logged in user
router.get('/', validUser, async (req, res) => {
  try {
    res.send({
      user: req.user
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// logout
router.delete("/", validUser, async (req, res) => {
  try {
    req.session = null;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: User,
  valid: validUser
};
