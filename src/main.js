import './styles/main.pcss';
import Vue from 'vue';
import xhr from './scripts/xhrRequests';
import EventBus from './scripts/eventBus';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./index.pug');
}

import './scripts/header';
import './scripts/parallax';

// Menu
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Menu from './components/menu/menu';

new Vue({
  el: '.header__menu',
  components: {
    vcMenu: Menu
  }
});

new Vue({
  el: '.footer__navigation',
  components: {
    vcMenu: Menu
  }
});

// Works
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import WorksSlider from './components/works-slider/works-slider';
import Tags from './components/tags/tags';
import Work from './components/work/work';

new Vue({
  el: '#works',
  components: {
    vcWorksSlider: WorksSlider,
    vcTags: Tags,
    vcWork: Work
  }
});

// Reviews
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import ReviewsCarousel from './components/reviews-carousel/reviews-carousel';

new Vue({
  el: '.reviews__container',
  data: {
    activePage: 0,
    pages: 0
  },
  components: {
    vcReviewsCarousel: ReviewsCarousel
  },
  methods: {
    prev() {
      document.querySelector('.VueCarousel-navigation-prev').click();
    },
    next() {
      document.querySelector('.VueCarousel-navigation-next').click();
    }
  },
  mounted() {
    EventBus.$on('activePage', number => {
      this.activePage = number;
    });
    EventBus.$on('pages', number => {
      this.pages = number;
    });
  }
});

// Skills
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Skills from './components/skills/skills';

new Vue({
  el: '#skills-list',
  components: {
    vcSkills: Skills
  }
});
