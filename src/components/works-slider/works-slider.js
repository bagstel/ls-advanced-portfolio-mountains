import Thumbnails from '../thumbnails/thumbnails';
import xhr from '../../scripts/xhrRequests';
import EventBus from '../../scripts/eventBus';

export default {
  template: '#works-slider-template',
  data() {
    return {
      works: [],
      activeWork: 0
    };
  },
  components: {
    vcThumbnails: Thumbnails
  },
  methods: {
    workFunc(work, index) {
      work.photo = 'https://webdev-api.loftschool.com/' + work.photo;
      work.techs = work.techs.split(',');
      work.index = index;

      return work;
    },
    prevSlide() {
      this.activeWork--;
    },
    nextSlide() {
      this.activeWork++;
    }
  },
  mounted() {
    xhr('get', 'works/174')
      .then(works => works.map((work, index) => this.workFunc(work, index)))
      .then(works => this.works = works)
      .then(() => {
        EventBus.$emit('work', this.works[this.activeWork]);
      });

    EventBus.$on('changeSlide', index => {
      this.activeWork = +index;
    })
  },
  watch: {
    activeWork: function () {
      EventBus.$emit('work', this.works[this.activeWork]);
    }
  }
};