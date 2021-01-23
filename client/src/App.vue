<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 16px;
  color: #2c3e50;
  padding-top: 70px;
}
</style>
