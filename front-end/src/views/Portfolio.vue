<template>
<div>
  <portfolioList :portfolioPieces="portfolioPieces" />
</div>
</template>

<script>
import portfolioList from "../components/portfolioList.vue"
export default {
  name: 'Portfolio',
  components: {
    portfolioList
  },
  data() {
    return {

    }
  },
  computed: {
    portfolioPieces() {
      return this.$root.$data.portfolioPieces;
    }
  },
}
</script>
