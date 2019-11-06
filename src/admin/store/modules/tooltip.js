export default {
  namespaced: true,
  state: {
    tooltip: {
      show: false,
      message: 'Сообщение успешно отправленно',
      status: 'success'
    },
    showed: false,
    message: 'Сообщение успешно отправленно',
    type: 'success'
  },
  mutations: {
    SET_VISIBILITY (state, payload) {
      state.showed = payload;
    },
    SET_MESSAGE (state, payload) {
      state.message = payload;
    },
    SET_TYPE (state, payload) {
      state.type = payload;
    },
    SHOW_TOOLTIP (state, { type, message }) {
      state.showed = true;
      state.message = message;
      state.type = type;
    }
  },
  actions: {
    showTooltip (context, payload) {
      const availableTypeOptions = ["success", "warning", "error"];

      if (availableTypeOptions.includes(payload.type) === false) {
        console.warn("Передан не допустимый тип для тултипов");
      }

      context.commit("SET_VISIBILITY", true);
      context.commit("SET_TYPE", payload.type);
      context.commit("SET_MESSAGE", payload.message);
    },
    visibility (context, payload) {
      context.commit('VISIBILITY');
    },
    closeTooltip (context, payload) {
      context.commit("SET_VISIBILITY", false);
    }
  },
  getters: {}
};