import Vue from 'vue';
import axios from './requests';
import router from './router';
import store from './store';
import App from './App.vue';

store.$axios = axios;

new Vue({
  el: '#app-root',
  router,
  store,
  render: h => h(App)
});