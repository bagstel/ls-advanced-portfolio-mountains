export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    setUser: (context, payload) => {
      context.commit("SET_USER", payload);
    }
  },
  getters: {
    userIsLogged: ({ user }) => {
      return (Object.keys(user).length === 0 && user.constructor === Object) === false;
    }
  }
};