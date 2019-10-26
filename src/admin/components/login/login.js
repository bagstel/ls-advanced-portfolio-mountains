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
        login: '',
        password: ''
      }
    };
  },
  validators: {
    'reg.login': function(value) {
      return Validator.value(value).required().minLength(6);
    },

    'reg.password': function(value) {
      return Validator.value(value).required().minLength(6);
    },
  },

  methods: {
    submit: function (event) {
      console.log('тест');
      this.$validate()
        .then(function (success) {
          console.log(success);
          if (success) {
            alert('Validation succeeded!');
          }
        });
    }
  }
};