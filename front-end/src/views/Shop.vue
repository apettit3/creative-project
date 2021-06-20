<template>
<div class="shop">
  <shopList v-if="user" :shopPieces="shopPieces" />
  <Login v-else />
</div>
</template>

<script>
import shopList from "../components/shopList.vue";
import Login from "@/components/Login.vue";
import axios from "axios";

export default {
  name: 'Shop',
  components: {
    shopList,
    Login,
  },
  data() {
    return {
    }
  },
  async created() {
    try {
      let activeUser = await axios.get('/api/users');
      this.$root.$data.user = activeUser.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    shopPieces() {
      return this.$root.$data.shopPieces;
    },
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>
