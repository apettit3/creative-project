<template>
<div class="contact">
  <div class="personal-container">
    <img class="portrait" src="@/assets/portrait.jpg" />
    <div class="bio">
      <h1>Hi, I'm Andrew!</h1>
      <p>I'm an 80s cartoon, food lovin', Californian; passionate about storytelling and what makes it tick. I will soon graduate from Brigham Young University with a BFA in animation and a minor in Computer Science</p>
      <p>While growing up I quickly discovered that I was passionate about computer games and drawing Teenage Mutant Ninja Turtles. Those desires grew to a beautiful marriage between art and technology. I am extremely passionate about growing this marriage and telling stories along with it.</p>
      <p>Feel free to contact me!</p>
    </div>
  </div>
</div>
</template>


<style>
.contact {
  margin: auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.personal-container {
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}

.portrait {
  max-height: 400px;
  width: auto;
  margin-right: 50px;
}

.bio {
  text-align: left;
}

</style>
