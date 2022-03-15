<template>
  <div class="container">
    <div v-if="!userStore.getters.isLoggedIn">
      <Login />
    </div>
    <div v-else="userStore.getters.isLoggedIn">
      <Home />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { defineComponent, onMounted } from "vue";
import Home from "@/components/HomeView.vue";
import Login from "@/components/Login.vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: "App",
  components: { Login, Home },

  setup() {
    onMounted(userStore.getUser);
    return { userStore };
  },
});
</script>