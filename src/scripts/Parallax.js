export default class {
  constructor(obj = {}) {
    this.__parallax = document.querySelector(obj.el);
    this.__startAt = obj.startAt ? obj.startAt : 0;
    this.__stopAt = obj.stopAt ? obj.stopAt : 100;
  }

  __moveLayersDependsOnScroll(scroll) {
    const layers = [...this.__parallax.children];

    layers.forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = scroll * divider / 10;

      layer.style.transform = `translateY(-${strafe}%)`;
    });
  }

  __scrollPosition() {
    const layerTopPosition = this.__parallax.getBoundingClientRect().top;
    const layerHeight = this.__parallax.clientHeight;
    const windowsHeight = document.documentElement.clientHeight;
    const startAt = (windowsHeight / 100) * this.__startAt - windowsHeight;
    const stopAt = (layerHeight / 100) * this.__stopAt;
    return {
      start: layerTopPosition + startAt,
      stop: layerTopPosition + startAt + stopAt
    };
  }

  __scroll () {
    const scroll = this.__scrollPosition();

    if (scroll.start <= 0 && scroll.stop >= 0) {
      console.log(scroll.start, scroll.stop);
      this.__moveLayersDependsOnScroll(Math.abs(scroll.start));
    }
  }

  init() {
    this.__scroll();

    window.addEventListener('scroll', () => {
      this.__scroll();
    });
  }
}