(function (className) {
  const btn = document.querySelector(className);
  const bodyTag = document.querySelector('body');
  const btnClose = document.querySelector('.popup-menu__btn btn--close');

  btn.addEventListener('click', (e) => {
    console.log('click');
    bodyTag.classList.toggle('overlay');
  });
})('.burger');