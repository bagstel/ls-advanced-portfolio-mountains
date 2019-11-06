import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import categories from './modules/categories';
import skills from './modules/skills';
import tooltip from './modules/tooltip';
import reviews from './modules/reviews';
import works from './modules/works';

export default new Vuex.Store({
  modules: {
    user,
    categories,
    skills,
    tooltip,
    reviews,
    works,
  }
});