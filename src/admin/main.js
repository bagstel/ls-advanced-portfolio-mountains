import Vue from 'vue';
import router from './router/index.js';
import store from './store';
import App from './App.vue';

new Vue({
  el: '#app-root',
  router,
  store,
  render: h => h(App)
});