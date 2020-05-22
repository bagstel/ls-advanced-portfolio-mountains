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
  
  // Если в store нет сохраненного объекта пользователя
  if (!isUserLogged) {
    const token = localStorage.getItem('token');

    console.warn('[строка 19] isUserLogged is false');

    if (!token && isPublicRoute) {
      console.warn('[строка 22] I\'is public route and the is no token found in localStorage');
      
      next();
    } else if (token) {
      console.warn('[строка 26] token found in localStorage');

      $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;
    
      try {
        const response = await $axios.get('/user');

        store.commit("user/SET_USER", response.data.user);
        
        console.warn('[строка 35] The user\'s object was successfully fetched', from.path);

        (from.path === "/login") ? next() : next({ path: from.path });
      } catch (e) {
        console.warn('[строка 39] The user\'s object was not fetched');

        localStorage.removeItem('token');

        next('/login');
      }
    } else {
      console.warn('[строка 46] token was no found in localStorage');

      next('/login');
    }
  } 
  // Если запрашиваемый путь публичный 
  // и в store есть объект пользователя
  else if (isPublicRoute && isUserLogged) {
    console.warn('[строка 54] isPublicRoute & isUserLogged is true');
    
    // переадресуется пользователя на страницу откуда он и пришел
    // path = 
    next({ path: from.path });
  } 
  // во всех остальных случаях
  else {
    console.warn('[строка 62] The global else block');

    next();
  }
});

export default router;