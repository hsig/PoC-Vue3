<template>
  <form class="myForm" @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input v-model="form.username"
        id="email"
        class="form-control"
        placeholder="name@example.com"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input v-model="form.password"
        id="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
    </div>
    <div class="text-danger">{{userStore.state.errors}}</div> 
    <button class="btn btn-success" type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import userStore from '@/stores/user'

export default defineComponent({
  setup() {
    const form = reactive({
      username: "",
      password: "",
    });

    const onSubmit = () => {
        userStore.login(form.username, form.password)
        form.username ='' 
        form.password =''
    };

    return { form, onSubmit, userStore };
  },
});
</script>

<style>
.myForm {
  min-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem
}
@media (max-width: 500px) {
  .myForm {
    min-width: 90%;
  }
}
</style>