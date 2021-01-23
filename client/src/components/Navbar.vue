<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex justify-content-between">
      <a href="/" class="navbar-brand">Auth</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{{
            username
          }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const username = store.state.user.username;

    console.log(username);
    return {
      username,
    };
  },
};
</script>

<style></style>
