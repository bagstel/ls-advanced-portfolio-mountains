import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    review: {
      author: '',
      occ: '',
      text: '',
      photo: ''
    }
  }),
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcReviewsItem: () => import('components/reviews-item/reviews-item.vue/'),
    vcReviewsAddNew: () => import('components/reviews-add-new/reviews-add-new.vue/'),
  },
  methods: {
    ...mapActions('reviews', ['loadReviews']),
    hideAddingCard () {
      this.showAddingCard = false;
      this.review = { ...{
          author: '',
          occ: '',
          text: '',
          photo: ''
        } }
    },
    editReview (payload) {
      this.review = payload;
      this.showAddingCard = true;
    }
  },
  computed: {
    ...mapGetters('reviews', ['getReviews']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  created () {
    this.loadReviews(this.userID);
  }
};