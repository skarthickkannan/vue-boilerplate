<template>
  <div class="home container-fluid">
    hello
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    let url = 'http://localhost:5000/auth/v1/user/';
    const store = useStore();

    onMounted(async () => {
      await fetch(url + 'current', {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      })
        .then((res) => res.json())
        .then((data) => store.dispatch('getUser', data));
    });
  },
};
</script>
