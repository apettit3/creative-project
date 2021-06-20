<template>
  <div id="app">
    <div id="header">
      <nav v-if="windowWidth < 600" class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #FFFFFF;">
        <router-link class="navbar-brand" to="/">Andrew Pettit: 3D Artist</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/">Demo Reel</router-link>
            <router-link class="nav-item nav-link" to="/portfolio">Portfolio</router-link>
            <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
            <router-link class="nav-item nav-link" to="/shop">Shop</router-link>
          </div>
        </div>
      </nav>
      <div v-else class="header">
        <div class="header-title">
          <h1>Andrew Pettit: 3D Artist</h1>
        </div>
        <div class="header-links">
          <router-link class="header-link" to="/">Demo Reel</router-link>
          <router-link class="header-link" to="/portfolio">Portfolio</router-link>
          <router-link class="header-link" to="/contact">Contact</router-link>
          <router-link class="header-link" to="/shop">Shop</router-link>
        </div>
      </div>
    </div>
    <div v-if="user" class="user-account">
    <a class="user-info"><img src="@/assets/icons/cart.svg" /></a>
      <p class="user-info">{{ user.firstName }}  {{ user.lastName }}</p>
      <a class="user-info" @click="logout"><img src="@/assets/icons/logout_sphere.svg" /></a>
    </div>
    <div v-else class="user-account">
      <p class="user-info">Login</p>
      <router-link to="/shop"><img src="@/assets/icons/login_sphere.svg" /></router-link>
    </div>
    <router-view/>
  <div class="footer">
    <router-link class="footer-link copyright" to="/">© 2021, Andrew Pettit Animation</router-link>
    <div class="footer-link media-container">
      <a class="media-link" href="https://vimeo.com/512375509"><img src="@/assets/icons/vimeo_circle.svg"/></a>
      <a class="media-link" href="https://www.instagram.com/androodlespettit/"><img src="@/assets/icons/instagram_circle.svg"/></a>
    </div>
    <div class="footer-link github">
      <a class="footer-link github-info" href="https://github.com/apettit3/creative-project.git">GitHub</a>
      <p class ="github-info" >Hours: 20</p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.header-title {
  margin: 20px 0px;
}

.header-links {
  display: flex;
  justify-content: space-between;
}

.user-account {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
}

.user-info {
  margin: 0px 5px;
}

.footer {
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  margin-left: 40px;
}

.media-link {
  margin: 0px 20px;
}

.github {
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
}

.github-info {
  margin: 0px 10px;
}
</style>
