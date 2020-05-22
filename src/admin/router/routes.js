import Header from '../components/header/header.vue';
import Tabs from '../components/tabs/tabs.vue';

export default [
  {
    path: '/',
    components: {
      default: () => import('../pages/skills/skills.vue'),
      tabs: Tabs,
      header: Header
    }
  },
  {
    path: '/works',
    components: {
      default: () => import('../pages/works/works.vue'),
      tabs: Tabs,
      header: Header
    }
  },
  {
    path: '/reviews',
    components: {
      default: () => import('../pages/reviews/reviews.vue'),
      header: Header,
      tabs: Tabs
    }
  },
  {
    path: '/login',
    component: () => import('../pages/login/login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '*',
    components: {
      default: () => import('../pages/404.vue'),
      header: Header,
      tabs: Tabs
    }
  }
];