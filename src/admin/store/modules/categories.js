import showErrorTooltip from '@/helpers/showErrorTooltip.js/';

const findRequiredCategory = (category, payload, cb) => {
  if (category.id === payload.category) {
    cb(category);
  }

  return category;
};

const replaceAllKeys = (category, payload) => {
  if (category.id === payload.category.id) {
    Object.keys(category).map(key => {
      if (payload.category[key]) {
        return category[key] = payload.category[key];
      }
    });
  }

  return category;
};

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload;
    },
    ADD_CATEGORY (state, payload) {
      state.categories.unshift(payload);
    },
    UPDATE_CATEGORY (state, payload) {
      state.categories = state.categories.map(category => replaceAllKeys(category, payload));
    },
    DELETE_CATEGORY (state, payload) {
      state.categories = state.categories.filter(category => {
        return category.id !== payload;
      });
    },
    ADD_SKILL (state, payload) {
      state.categories = state.categories.map(category => {
        if (category.id === payload.category) {
          category.skills = category.skills || [];
          category.skills.push(payload);
          console.log(category);
        }

        return category;
      });
    },
    DELETE_SKILL (state, payload) {
      const removeSkill = category => {
        category.skills = category.skills.filter(skill => skill.id !== payload.id);
      };

      state.categories = state.categories.map(category => {
        return findRequiredCategory(category, payload, removeSkill);
      });
    },
    EDIT_SKILL (state, payload) {
      const editSkill = category => {
        category.skills = category.skills.map(skill => {
          return (skill.id === payload.id) ? payload : skill;
        });
      };

      state.categories = state.categories.map(category => {
        return findRequiredCategory(category, payload, editSkill);
      });
    }
  },
  actions: {
    async loadCategories (context, payload) {
      try {
        const { data } = await this.$axios.get(`/categories/${ payload }`);
        context.commit('SET_CATEGORIES', data);
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async addCategory (context, payload) {
      try {
        const { data } = await this.$axios.post(`/categories`, { title: payload });
        context.commit('ADD_CATEGORY', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно добавленна' }, { root: true });
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async updateCategory (context, payload) {
      try {
        const { data } = await this.$axios.post(`/categories/${payload.id}`, { title: payload.title });
        context.commit('UPDATE_CATEGORY', data);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно обновлена' }, { root: true })
      } catch (error) {
        showErrorTooltip(context, error);
      }
    },
    async deleteCategory (context, payload) {
      try {
        const { data } = this.$axios.delete(`/categories/${payload}`);
        context.commit('DELETE_CATEGORY', payload);
        context.commit('tooltip/SHOW_TOOLTIP', { type: 'success', message: 'Категория успешно удалена' }, { root: true })
      } catch (error) {
        showErrorTooltip(context, error);
      }
    }
  },
  getters: {
    getCategories (state) {
      return state.categories;
    }
  }
};