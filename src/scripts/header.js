(function (header) {
    window.addEventListener('scroll', event => {
        const vScroll = window.pageYOffset;
        const scrolledValue = 21;

        if (vScroll >= scrolledValue) {
            header.classList.add('header--fixed')
        } else if (vScroll <= 21) {
            header.classList.remove('header--fixed')
        }
    });
})(document.querySelector('.header'));