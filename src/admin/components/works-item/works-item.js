import { mapActions } from 'vuex';

export default {
  name: 'works-item',
  props: ['work'],
  components: {
    vcTags: () => import('components/tags/tags.vue/')
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    workPhoto (photo) {
      return `https://webdev-api.loftschool.com/${ photo }`;
    },
    editWork () {
      this.$emit('editWork', this.work);
    },
    deleteTheWork (payload) {
      this.deleteWork(payload);
    }
  }
};