import { mapActions } from 'vuex';

export default {
  name: 'reviews-item',
  props: ['review'],
  methods: {
    ...mapActions('reviews', ['deleteReview']),
    editReview() {
      this.$emit('editReview', this.review);
    },
    deleteTheReview(payload) {
      this.$emit('hideAddingCard');
      this.deleteReview(payload);
    }
  },
  computed: {
    reviewPhoto() {
      return `background-image: url(https://webdev-api.loftschool.com/${this.review.photo})`;
    }
  }
};