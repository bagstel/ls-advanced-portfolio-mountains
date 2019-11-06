import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import EventBus from '../../scripts/eventBus';

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
  offset: -108
});

export default {
  template: '#menu-template',
  props: ['modifier'],
  data() {
    return {
      activeLink: '#home',
      links: [
        {href: '#home', text: 'Главная'},
        {href: '#skills', text: 'Обо мне'},
        {href: '#skills', text: 'Навыки'},
        {href: '#works', text: 'Работы'},
        {href: '#reviews', text: 'Отзывы'},
        {href: '#feedback', text: 'Связаться'}
      ]
    };
  },
  methods: {
    onStart(elem) {
      // EventBus.$emit('hash', `#${elem.getAttribute('id')}`);
    },
    onScroll() {
      window.addEventListener('scroll', () => {
        this.links.forEach(link  => {
          const top = document.querySelector(link.href).getBoundingClientRect().top;

          if ((top - 108 - 10) <= 0) {
            this.activeLink = link.href;
          }
        });
      });
    }
  },

  mounted() {
    this.onScroll();

    const hash = location.hash;
    this.active = (hash === '') ? '#home' : hash;

    // EventBus.$on('hash', hash => {
    //   location.hash = this.activeLink = hash;
    // });
  },

  computed: {
    getClass() {
      return 'menu menu--' + this.modifier;
    },

    getActiveLink() {
      return this.activeLink;
    }
  }
};