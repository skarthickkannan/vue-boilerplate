<template>
  <form
    class="w-50 rounded border p-4 mx-auto my-auto"
    @submit.prevent="register"
  >
    <h3 class="text-center mx-4">Register</h3>
    <div class="form-group">
      <label for="exampleInputUsername1">Username</label>
      <input
        type="text"
        class="form-control"
        v-model="registerData.username"
        id="exampleInputUsername1"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        v-model="registerData.email"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        v-model="registerData.password"
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

    const registerData = reactive({
      username: '',
      email: '',
      password: '',
    });

    const register = async () => {
      console.log('hello');
      await store.dispatch('registerData', registerData);
      router.push('/login');
    };
    return {
      register,
      registerData,
    };
  },
};
</script>

<style></style>
