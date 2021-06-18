<template>
<div class="hero">
  <div class="heroBox">
    <form class="pure-form myForm">
      <fieldset class="pure-group">
        <legend>Login to Access Shop</legend>
        <input placeholder="email" v-model="emailLogin">
        <input type="password" placeholder="password" v-model="passwordLogin">
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
      </fieldset>
    </form>
    <p v-if="errorLogin" class="error">{{errorLogin}}</p>
    <div class="myForm">
      <form class="pure-form">
        <fieldset class="pure-group">
          <legend>Register</legend>
          <input placeholder="first name" v-model="firstName">
          <input placeholder="last name" v-model="lastName">
        </fieldset>
        <fieldset class="pure-group">
          <input placeholder="email" v-model="email">
          <input type="password" placeholder="password" v-model="password">
        </fieldset>
        <fieldset>
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
        </fieldset>
      </form>
    </div>
    <p v-if="error" class="error">{{error}}</p>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      emailLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = "";
      this.errorLogin = "";
      if (!this.firstName || !this.lastName || !this.email || !this.password)
        return;
      try {
        let response = await axios.post("/api/users", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = "";
      this.errorLogin = "";
      if (!this.emailLogin || !this.passwordLogin)
        return;
      try {
        let response  = await axios.post("/api/users/login", {
          email: this.emailLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  },
}
</script>

<style>
.myForm {
  display: flex;
  justify-content: space-around;
}
</style>
