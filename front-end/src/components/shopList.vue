<template>
<div class="container">
  <h3>WELCOME TO THE SHOP</h3>
  <h5 class="subtitle">PRINTS</h5>
  <div class="pieces">
    <div class="piece" v-for="piece in shopPieces" :key="piece.id">
      <div class="image">
        <img :src="piece.image" />
      </div>
      <p class="name">{{ piece.name }}</p>
      <div class="cart-container">
        <p class="cart-info add-button">Add to Cart</p>
        <p class="cart-info">${{ piece.price }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "shopList",
  props: {
    shopPieces: Array
  },
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.subtitle {
  padding: 10px;
  border-top: solid black 2px;
  margin-bottom: 10px;
}

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
  margin: 7px auto;
}

.cart-container {
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.add-button {
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 10px;
  background-color: #999999;
}
</style>
