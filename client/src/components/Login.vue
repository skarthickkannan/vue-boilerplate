<template>
  <form class="w-50 rounded border p-4 mx-auto my-auto" @submit.prevent="login">
    <h3 class="text-center mx-4">Login</h3>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        v-model="loginData.email"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        v-model="loginData.password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>

    <button type="submit" class="btn btn-primary ">Submit</button>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

import router from '../router';

export default {
  setup() {
    const store = useStore();

    const loginData = reactive({
      email: '',
      password: '',
    });

    const login = async () => {
      await store.dispatch('loginData', loginData);
      router.push('/');
    };
    return {
      login,
      loginData,
    };
  },
};
</script>

<style></style>
