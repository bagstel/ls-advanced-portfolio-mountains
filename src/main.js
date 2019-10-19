import './styles/main.pcss';
import Vue from 'vue';
import xhr from './scripts/xhrRequests';
import EventBus from './scripts/eventBus';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./index.pug');
}

import './scripts/header';
import './scripts/inputs';

// Parallax
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Parallax from './scripts/Parallax';

// создаем и тут же инициализируем параллакс
new Parallax({
  // имя параллакс класса, идентификатра или тега.
  // в случае класса или идентификатор, в начале имени нужно указывать точку или решотку соответственно.
  el: '.parallax--mountains',
  // Стартовая позиция праллакса от 0 до 100
  // 0 - это когда параллак блок только появился при прокрутке,
  // а 100 - когда параллакс блок достик верхней границы окна браузера
  startAt: 100,
  // Винишная позиция паралакса от 0 до 100
  // 0 - это когда параллак блок прекращает работы достигнув верхней границей верхнюю границу окна
  // а 100 - это когда параллакс блок прекращает работы достигнув нижней границей верхнюю границу окна
  stopAt: 100
}).init();

new Parallax({
  el: '.parallax--buddha',
  startAt: 30,
  stopAt: 100
}).init();

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
// import Tags from './components/tags/tags';
// import Work from './components/work/work';

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
      console.log(number);
    });
  }
});

