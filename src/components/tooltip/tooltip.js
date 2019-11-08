import EventBus from '../../EventBus';

export default {
  template: '#tooltip-template',
  data: () => ({
    tooltip: {
      showed: false,
      type: 'success',
      message: 'Сообщение успешно отправленно!'
    }
  }),
  methods: {
    closeTooltip() {
      this.tooltip.showed = false;
    }
  },
  mounted() {
    EventBus.$on('validateEvent', payload => {
      this.tooltip.showed = payload.showed;
    });
  },
  watch: {
    "tooltip.showed" (value) {
      if (value) {
        let timeout;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  }
};