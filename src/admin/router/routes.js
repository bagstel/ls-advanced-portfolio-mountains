import Header from '../components/header/header.vue';
import Tabs from '../components/tabs/tabs.vue';

export default [
  {
    path: '/',
    components: {
      default: () => import('../pages/about/about.vue'),
      header: Header,
      tabs: Tabs
    }
  },
  {
    path: '/works',
    components: {
      default: () => import('../pages/works/works.vue'),
      header: Header,
      tabs: Tabs
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
  }
];