import showErrorTooltip from '@/helpers/showErrorTooltip.js/'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async addSkill (context, payload) {
      try {
        const { data } = await this.$axios.post('/skills', payload);
        context.commit('categories/ADD_SKILL', data, { root: true });
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Скилл успешно добавлен' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async deleteSkill (context, payload) {
      try {
        await this.$axios.delete(`/skills/${ payload.id }`);
        context.commit('categories/DELETE_SKILL', payload, { root: true });
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Скилл успешно удален' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async editSkill (context, payload) {
      try {
        const { data } = await this.$axios.post(`/skills/${ payload.id }`, payload);
        context.commit('categories/EDIT_SKILL', data.skill, { root: true });
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Скилл успешно изменен' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    }
  },
  getters: {}
};