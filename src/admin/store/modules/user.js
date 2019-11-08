export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    LOGOUT_USER: (state) => {
      state.user = {}
    }
  },
  actions: {
    setUser: (context, payload) => {
      context.commit("SET_USER", payload);
    },
    async logoutUser (context, payload) {
      await this.$axios.post('/logout');
      context.commit('LOGOUT_USER');
    }
  },
  getters: {
    userIsLogged: ({ user }) => {
      return (Object.keys(user).length === 0 && user.constructor === Object) === false;
    }
  }
};