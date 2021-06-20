<template>
<div class="container">
  <h1 class="contribution">Texturing</h1>
  <div class="pieces">
    <div class="piece" v-for="piece in texturePieces" :key="'texture' + piece.id">
      <div class="image">
        <img :src="piece.image" />
      </div>
      <p class="name">{{ piece.name }}</p>
    </div>
  </div>
  <h1 class="contribution">Modeling</h1>
  <div class="pieces">
    <div class="piece" v-for="piece in modelPieces" :key="'model' + piece.id">
      <div class="image">
        <img :src="piece.image" />
      </div>
      <p class="name">{{ piece.name }}</p>
    </div>
  </div>
  <h1 class="contribution">Compositing</h1>
  <div class="pieces">
    <div class="piece" v-for="piece in compPieces" :key="'comp' + piece.id">
      <div class="image">
        <img :src="piece.image" />
      </div>
      <p class="name">{{ piece.name }}</p>
    </div>
  </div>
  <h1 class="contribution">Design</h1>
  <div class="pieces">
    <div class="piece" v-for="piece in designPieces" :key="'comp' + piece.id">
      <div class="image">
        <img :src="piece.image" />
      </div>
      <p class="name">{{ piece.name }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "portfolioList",
  props: {
    portfolioPieces: Array
  },
  computed: {
    texturePieces() {
      return this.portfolioPieces.filter(piece => {
        for (let index = 0; index < piece.contribution.length; index++) {
          if (piece.contribution[index] === "texture") {
            return piece;
          }
        }
      })
    },
    modelPieces() {
      return this.portfolioPieces.filter(piece => {
        for (let index = 0; index < piece.contribution.length; index++) {
          if (piece.contribution[index] === "model") {
            return piece;
          }
        }
      })
    },
    compPieces() {
      return this.portfolioPieces.filter(piece => {
        for (let index = 0; index < piece.contribution.length; index++) {
          if (piece.contribution[index] === "comp") {
            return piece;
          }
        }
      })
    },
    designPieces() {
      return this.portfolioPieces.filter(piece => {
        for (let index = 0; index < piece.contribution.length; index++) {
          if (piece.contribution[index] === "design") {
            return piece;
          }
        }
      })
    },
  }
}
</script>

<style scoped>
.pieces {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.piece {
  margin: 10px;
}

img {
  height: 180px;
  width: 320px;
  object-fit: cover;
}

.name {
  margin-top: 5px;
}
</style>
