import $axios from '@/requests/';
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  data: () => ({
    tooltip: {
      showed: false,
      message: 'Авторизация прошла успешно',
      status: 'success'
    },
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
    submit: async function (event) {
      if (await this.$validate()) {
        try {
          const { data: { token } } = await $axios.post('/login', this.user);

          localStorage.setItem('token', token);
          $axios.defaults.headers['Authorization'] = `Bearer ${ token }`;
          await this.$router.replace('/');
        } catch ({ message }) {
          this.tooltip = { showed: true, message, status: 'error' };
        }
      }
    }
  }
};