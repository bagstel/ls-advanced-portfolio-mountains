import EventBus from '../../scripts/eventBus'

export default {
  template: '#thumbnails',
  props: {
    works: Array,
    activeWork: Number
  },
  methods: {
    changeSlide() {
      const { index } = event.target.dataset;

      EventBus.$emit('changeSlide', index);
      console.log(event.target.dataset.index);
    }
  }
}