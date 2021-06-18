<template>
  <div class="home">
    <h1 class="reel-title">DEMO REEL</h1>
    <vimeo-player class="reel" ref="player" :video-id="videoID" @ready="onReady" :player-height="height"></vimeo-player>
    <h4 id="contact-info">andrewp2010@gmail.com | @androodlesPettit</h4>
    <div class="links-container">
      <div class="personal-links">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      videoID: '512375509',
      height: 500,
      options: {
        muted: true,
        autoplay: true,
      },
      playerReady: false
    }
  },
  methods: {
    onReady() {
      this.playerReady = true
    },
    play () {
      this.$refs.player.play()
    },
    pause () {
      this.$refs.player.pause()
    }
  }
}
</script>

<style>
.reel-title {
  margin-top: 50px;
}
</style>
