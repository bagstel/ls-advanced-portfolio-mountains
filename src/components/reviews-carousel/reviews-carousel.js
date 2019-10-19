import {Carousel, Slide} from 'vue-carousel';
import EventBus from '../../scripts/eventBus';
import xhr from '../../scripts/xhrRequests';
import Quote from '../quote/quote';

export default {
  template: '#reviews-carousel-template',
  data() {
    return {
      reviews: [],
      slidesPerPage: 2
    };
  },
  methods: {
    pageChange(number) {
      EventBus.$emit('activePage', number);
    },
    pages() {
      if (this.slidesPerPage > 1) {
        return this.reviews.length % 2 === 1 ? (this.reviews.length - 1) / 2 : (this.reviews.length / 2 - 1);
      }

      return this.reviews.length - 1;
    },
    calcSlidesPerPage(self) {
      function calc() {
        self.slidesPerPage = (window.innerWidth <= 768) ? 1 : 2;
      }

      calc();

      window.addEventListener('resize', calc);
    }
  },
  components: {
    Carousel,
    Slide,
    vcQuote: Quote
  },
  mounted() {
    this.calcSlidesPerPage(this);

    xhr('get', 'reviews/174')
      .then(reviews => {
        return reviews.map(review => {
          return (review.photo = 'https://webdev-api.loftschool.com/' + review.photo) && review;
        });
      })
      .then(reviews => this.reviews = reviews)
      .then(() => {
        EventBus.$emit('pages', this.pages());
      });
  },
  watch: {
    slidesPerPage() {
      EventBus.$emit('pages', this.pages());
    }
  }
};