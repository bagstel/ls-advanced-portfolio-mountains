export default {
  name: 'input',
  props: {
    name: String,
    autofocus: Boolean,
    title: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String | Number,
    icon: {
      type: String,
      default: '',
      validator: value => ['', 'user', 'key'].includes(value)
    },
    errorText: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {
    iconClass () {
      const icon = this.icon;

      return [this.icon].length ? ` input--iconed input__icon--${ this.icon }` : '';
    }
  },
  components: {
    vcTooltipInput: () => import('../tooltip-input/tooltip-input.vue')
  }
};