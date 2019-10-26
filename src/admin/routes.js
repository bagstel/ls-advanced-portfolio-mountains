import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Header from './components/header/header.vue';
import Tabs from './components/tabs/tabs.vue';
import Login from './components/login/login.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: () => import('./components/about/about.vue'),
        header: Header,
        tabs: Tabs
      }
    },
    {
      path: '/works',
      components: {
        default: () => import('./components/works/works.vue'),
        header: Header,
        tabs: Tabs
      }
    },
    {
      path: '/reviews',
      components: {
        default: () => import('./components/reviews/reviews.vue'),
        header: Header,
        tabs: Tabs
      }
    },
    { path: '/login', component: Login }
  ]
});