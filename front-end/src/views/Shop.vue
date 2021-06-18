<template>
<div class="shop">
  <ShopItems v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import ShopItems from "@/components/ShopItems.vue";
import Login from "@/components/Login.vue";
import axios from "axios";

export default {
  name: "shop",
  components: {
    ShopItems,
    Login,
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
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>
