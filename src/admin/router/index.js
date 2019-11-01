import Vue from 'vue';
import VueRouter from 'vue-router';
import $axios from '@/requests/';
import store from '@/store/';
import routes from "@/router/routes/";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogged === false) {
    const token = localStorage.getItem('token');

    $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;

    try {
      const response = await $axios.get('/user');

      store.commit("user/SET_USER", response.data.user);

      next();
    } catch (e) {
      await router.replace('/login');
      localStorage.removeItem('token');
    }
  } else {
    next();
  }
});


export default router;