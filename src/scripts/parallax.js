

(function parallax() {
  let parallax = document.querySelectorAll('.parallax');
  let windowWidth = null;

  (function getWindowWidth() {
    let get = () => (windowWidth = document.querySelector('body').clientWidth);

    get() && window.addEventListener('resize', () => get());
  }());

  function getExtraTopMargin(parallax, percent) {
    const parallaxHeight = parallax.clientHeight;

    [...parallax.children].forEach(layer => {
      const layerTop = getComputedStyle(layer.children[0]).getPropertyValue('top').replace('px', '');
      const layerSpeed = layer.dataset.speed;

      layer.children[0].style.top = (parallaxHeight * (percent / 100 + 1.0) * +layerSpeed + +layerTop) + 'px';
    });
  }

  function moveLayersDependsOnScroll(parallax, percent) {
    const windowOffset = window.pageYOffset;
    const parallaxOffsetTop = parallax.parentElement.offsetTop;
    const parallaxOffsetBottom = parallaxOffsetTop + parallax.clientHeight;
    const scroll = windowOffset - parallaxOffsetTop + (window.innerHeight / 100 * percent);

    if (windowOffset >= parallaxOffsetTop - (window.innerHeight / 2) && windowOffset <= parallaxOffsetBottom) {
      [...parallax.children].forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = scroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%) translateZ(0)`;
      });
    }
  }

  if (windowWidth > 768) {
    [...parallax].forEach(parallax => {
      const percent = parallax.dataset.percent || 0;

      if (percent > 0) {
        getExtraTopMargin(parallax, percent);
      }

      window.addEventListener('scroll', () => {
        moveLayersDependsOnScroll(parallax, percent);
      });
    });
  }
})();