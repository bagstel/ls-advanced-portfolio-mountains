import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('tooltip', {
      showed: state => state.showed,
      type: state => state.type,
      message: state => state.message,
    })
  },
  methods: {
    ...mapActions('tooltip', ['closeTooltip'])
  },
  watch: {
    showed (value) {
      if (value) {
        let timeout;

        clearTimeout(timeout);

        timeout = setTimeout(() => this.closeTooltip(), 3000);
      }
    }
  }
};