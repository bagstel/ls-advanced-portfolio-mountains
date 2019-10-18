import EventBus from '../../scripts/eventBus';

export default {
  template: '#work-template',
  data () {
    return {
      work: {}
    }
  },
  mounted() {
    EventBus.$on('work', work => {
      this.work = work;
    });
  }
}