import Vue from 'vue';
import router from './routes.js';
import store from './store';

import App from './App.vue';



new Vue({
  el: '#app-root',
  router,
  store,
  render: h => h(App)
});