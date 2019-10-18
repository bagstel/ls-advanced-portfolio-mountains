import EventBus from '../../scripts/eventBus';

export default {
  template: '#tags-template',
  data () {
    return {
      techs: []
    }
  },
  mounted() {
    EventBus.$on('work', ({ techs }) => {
      this.techs = techs;
      console.log(techs);
    });
  }
}