import showErrorTooltip from '@/helpers/showErrorTooltip.js/'
import formData from '@/helpers/formData.js/';

export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    LOAD_WORKS (state, payload) {
      state.works = payload;
    },
    SAVE_WORK (state, payload) {
      state.works.push(payload);
    },
    UPDATE_WORK (state, payload) {
      state.works = state.works.map(work => {
        return work.id === payload.work.id ? payload.work : work;
      })
    },
    DELETE_WORK (state, payload) {
      state.works = state.works.filter(work => {
        if (work.id !== payload) {
          return work;
        }
      })
    }
  },
  actions: {
    async loadWorks (context, payload) {
      try {
        const { data } = await this.$axios.get(`/works/${payload}`);
        context.commit('LOAD_WORKS', data);
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async saveWork (context, payload) {
      try {
        const { data } = await this.$axios.post('/works', formData(payload), { headers: { 'Content-Type': 'multipart/form-data' } });
        context.commit('SAVE_WORK', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Работа успешно добавлена' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async updateWork (context, payload) {
      try {
        const { data } = await this.$axios.post(`/works/${payload.id}`, formData(payload), { headers: { 'Content-Type': 'multipart/form-data' } });
        context.commit('UPDATE_WORK', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Работа успешно обновлена' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async deleteWork (context, payload) {
      try {
        await this.$axios.delete(`/works/${payload}`);
        context.commit('DELETE_WORK', payload);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Работа успешно удалена' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    }
  },
  getters: {
    getWorks (state) {
      return state.works;
    }
  }
}