export default {
  props: ['tooltip'],
  methods: {
    hideTooltip() {
      this.tooltip.showed = false;
    }
  }
};