import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';

const Validator = SimpleVueValidation.Validator;

import Localization from '../../components/login/localization.js';

SimpleVueValidation.extendTemplates(Localization);

Vue.use(SimpleVueValidation);

export default {
  data () {
    return {
      reg: {
        login:  '',
        password: ''
      }
    };
  },
  validators: {
    'reg.login': function (value) {
      return Validator.value(value).required().minLength(6);
    },

    'reg.password': function (value) {
      return Validator.value(value).required().minLength(6);
    }
  },

  methods: {
    submit: async function (event) {
      const response = await this.$validate();

      if (response) {
        alert('Validation succeeded!');
      }
    }
  },
  computed: {
    loginHasError() {
      return this.validation.firstError('reg.login')
    },
    passwordHasError() {
      return this.validation.firstError('reg.password')
    }
  }
};