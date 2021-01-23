import { createStore } from 'vuex';

let url = 'http://localhost:5000/auth/v1/user/';
export default createStore({
  state: {
    user: '',
    isLoggedIn: false,
  },
  mutations: {
    async loginData(state, payload) {
      await fetch(url + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => localStorage.setItem('token', data.token));
    },
    async registerData(state, payload) {
      await fetch(url + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    },
    getUser(state, payload) {
      if (payload) {
        state.isLoggedIn = true;
        state.user = payload;
      } else {
        state.isLoggedIn = false;
        state.user = '';
      }
    },
  },
  actions: {
    loginData(state, payload) {
      state.commit('loginData', payload);
    },
    registerData(state, payload) {
      state.commit('registerData', payload);
    },
    getUser(state, payload) {
      state.commit('getUser', payload);
    },
  },
  modules: {},
});
