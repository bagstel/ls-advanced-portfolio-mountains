import { mapActions } from 'vuex';
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'skills-add-new',
  props: ['category'],
  data () {
    return {
      formBlocked: !this.category,
      skill: {
        title: '',
        percent: 0
      }
    };
  },
  validators: {
    'skill.title': value => {
      return Validator.value(value).required('Заполните название');
    },
    'skill.percent': value => {
      return Validator.value(value)
        .integer('Должно быть числом')
        .between(0, 100, 'Некорректное значение для процентов')
        .required('Поле не может быть пустым');
    }
  },
  components: {
    vcInput: () => import('components/input/input.vue/')
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill () {
      if (await this.$validate()) {
        this.formBlocked = true;
        this.skill.category = this.category.id;
        await this.addSkill(this.skill);
        this.formBlocked = this.skill.title = '';
        this.skill.percent = 0;
        this.validation.reset();
      }
    }
  }
};