<template>
<div class="container">
  <div class="pieces">
    <div class="piece" v-for="piece in portfolioPieces" :key="piece.id">
      <div class="image">
        <p>{{ piece.image }} </p>
        <img :src="piece.image" />
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "portfolioList",
  props: {
    portfolioPieces: Array
  }
}
</script>
