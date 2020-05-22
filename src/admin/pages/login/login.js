import $axios from '@/requests/';
import simpleVueValidator from 'simple-vue-validator';

const { Validator } = simpleVueValidator;
import { mapActions} from 'vuex';

export default {
  mixins: [simpleVueValidator.mixin],
  data: () => ({
    user: {
      name: '',
      password: ''
    }
  }),
  components: {
    vcTooltip: () => import('../../components/tooltip/tooltip.vue'),
    vcInput: () => import('../../components/input/input.vue')
  },
  validators: {
    'user.name': function (value) {
      return Validator.value(value).required().minLength(6);
    },
    'user.password': function (value) {
      return Validator.value(value).required().minLength(6);
    }
  },
  methods: {
    ...mapActions('tooltip', ['showTooltip']),
    submit: async function () {
      if (await this.$validate()) {
        try {
          const { data: { token } } = await $axios.post('/login', this.user);

          localStorage.setItem('token', token);
          $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;
          
          this.$router.replace('/');
        } catch ({ message }) {
          this.showTooltip( { message, type: 'error' });
        }
      }
    }
  }
};