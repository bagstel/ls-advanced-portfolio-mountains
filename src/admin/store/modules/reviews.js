import showErrorTooltip from '@/helpers/showErrorTooltip.js/'
import formData from '@/helpers/formData.js/';

export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    LOAD_REVIEWS (state, payload) {
      state.reviews = payload;
    },
    SAVE_REVIEW (state, payload) {
      state.reviews.push(payload);
    },
    UPDATE_REVIEW (state, payload) {
      state.reviews = state.reviews.map(review => {
        return review.id === payload.review.id ? payload.review : review;
      })
    },
    DELETE_REVIEW (state, payload) {
      state.reviews = state.reviews.filter(review => {
        if (review.id !== payload) {
          return review;
        }
      })
    }
  },
  actions: {
    async loadReviews (context, payload) {
      try {
        const { data } = await this.$axios.get(`/reviews/${payload}`);
        context.commit('LOAD_REVIEWS', data);
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async saveReview (context, payload) {
      try {
        const { data } = await this.$axios.post('/reviews', formData(payload), { headers: { 'Content-Type': 'multipart/form-data' } });
        context.commit('SAVE_REVIEW', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно добавлен' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async updateReview (context, payload) {
      try {
        const { data } = await this.$axios.post(`/reviews/${payload.id}`, formData(payload), { headers: { 'Content-Type': 'multipart/form-data' } });
        context.commit('UPDATE_REVIEW', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно обновлен' }, { root: true });
        console.log(data);
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async deleteReview (context, payload) {
      try {
        await this.$axios.delete(`/reviews/${payload}`);
        context.commit('DELETE_REVIEW', payload);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Отзыв успешно удален' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    }
  },
  getters: {
    getReviews (state) {
      return state.reviews;
    }
  }
}