export default {
  template: "#skill-template",
  props: {
    skill: Object
  },
  methods: {
    percent(percent) {
      return `animation-delay: -${percent}s`;
    }
  }
}