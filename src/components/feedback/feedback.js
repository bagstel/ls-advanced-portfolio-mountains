import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;
import EventBus from '../../EventBus';

export default {
  mixins: [SimpleVueValidator.mixin],
  template: '#feedback-template',
  data: () => ({
    name: '',
    email: '',
    message: ''
  }),
  components: {
    vcInput: () => import('../input/input.vue')
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required();
    },
    email: function (value) {
      return Validator.value(value).required().email();
    },
    message: function (value) {
      return Validator.value(value).required().minLength(15);
    }
  },
  methods: {
    submit () {
      this.$validate()
        .then(status => {
          if (status) {
            EventBus.$emit('validateEvent', { showed: true });
            this.name = this.email = this.message = '';
            this.validation.reset();
          }
        });
    }
  }
};