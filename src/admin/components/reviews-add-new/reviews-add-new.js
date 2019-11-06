import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'reviews-add-new',
  props: {
    review: Object
  },
  data () {
    return {
      isBlocked: false,
      renderedPhoto: '',
      newReview: { ...this.review }
    };
  },
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcTooltipInput: () => import('components/tooltip-input/tooltip-input.vue/')
  },
  validators: {
    'newReview.author': function (value) {
      return Validator.value(value).required()
    },
    'newReview.occ': function (value) {
      return Validator.value(value).required()
    },
    'newReview.text': function (value) {
      return Validator.value(value).required()
    },
    'newReview.photo': function (value) {
      return Validator.value(value).required()
    }
  },
  methods: {
    ...mapActions('reviews', ['saveReview', 'updateReview']),
    hideAddingCard () {
      this.$emit('hideAddingCard');
    },
    appendFileAndRenderPhoto (e) {

      this.newReview.photo = e.target.files[0];
      const reader = new FileReader();

      try {
        reader.readAsDataURL(this.newReview.photo);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        //-----------------
      }
    },
    async reviewCard (payload) {
      if (await this.$validate()) {
        this.isBlocked = true;

        const isChanged = Object.keys(this.newReview).some(key => {
          return this.newReview[key] !== this.review[key];
        });

        if (isChanged) {
          payload.id ? await this.updateReview(payload) : await this.saveReview(payload);
        }

        this.$emit('hideAddingCard');
      }
    }
  },
  computed: {
    ...mapGetters('reviews', ['getReviews']),
    renderedBackground () {
      return this.renderedPhoto ? `background-image: url(${ this.renderedPhoto });` : '';
    }
  },
  created () {
    this.newReview = { ...this.review };
    if(this.review.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
    }
  },
  watch: {
    review () {
      console.log('watch');
      this.newReview = { ...this.review };
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
    }
  }
};