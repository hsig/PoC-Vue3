<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.svg" alt="" width="30" height="24" /> PoC-Vue3
      </a>
      <bouton class="btn btn-secondary"
        @click="userStore.logout()"
      >logout</bouton>
    </div>
  </nav>
  <div class="jumbotron">
    <h2>Welcome {{ userStore.state.name }}</h2>
    <h3>{{ state.count }} x 2 = {{ getters.val }}</h3>
    <button class="btn btn-success block m-2" @click="inc(1)">Inc</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import countStore from "../stores/counter";
import userStore from "../stores/user";

export default defineComponent({
  setup() {
    const { state, getters, inc } = countStore;
    return { state, getters, inc, userStore };
  },
});
</script>