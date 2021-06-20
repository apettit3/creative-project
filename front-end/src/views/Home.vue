<template>
  <div class="home">
    <h1 class="reel-title">DEMO REEL</h1>
    <video-embed class="video" src="https://vimeo.com/512375509"></video-embed>
    <h3>andrewp2010@gmail.com | @androodlesPettit</h3>
    <div class="link-container">
      <div class="personal-links">
        <router-link to="/portfolio" id="gallery-link">
          <img class="image-link" src="@/assets/portfolio/strawberrySingle.png" />
          <h1 class="centered">PORTFOLIO</h1>
        </router-link>
        <router-link to="/contact" id="contact-link">
          <img class="image-link" src="@/assets/portfolio/snesController.png" />
          <h1 class="centered">CONTACT</h1>
        </router-link>
      </div>
      <router-link to="/shop" id="shop-link">
        <img class="image-link" src="@/assets/portfolio/windmill.jpg" />
        <h1 class="centered">SHOP</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
}
</script>

<style>
.reel-title {
  margin-top: 50px;
}

.video {
  width: 75%;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.link-container {
  width: 60%;
  margin-top: 50px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.personal-links {
  display: flex;
  justify-content: space-between;
}

#shop-link img {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.image-link {
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 50px;
  filter: brightness(60%);
}

#gallery-link,
#contact-link,
#shop-link {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4vw;
  font-weight: bold;
}
</style>
