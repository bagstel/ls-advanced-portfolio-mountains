(function (inputs, textarea) {
    const items = [...inputs].concat([...textarea]);

    items.forEach(item => {
        const labelTop = window
            .getComputedStyle(item.nextElementSibling)
            .getPropertyValue('top');

        item.addEventListener('focus', ({ target }) => {
            target.nextElementSibling.style.top = 0 + 'px';
        });

        item.addEventListener('blur', ({ target }) => {
            if (target.value === "") {
                target.nextElementSibling.style.top = labelTop;
            }
        });
    });
})(document.querySelectorAll('.form__input'), document.querySelectorAll('.form__textarea'));