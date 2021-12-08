{
    let header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })

        let menuHead = document.querySelector('.menu__head');
        let scrollWrap = document.querySelector('.menu__scroll-wrap');

        const setScrollWrapHeight = () => {
            if(document.documentElement.clientWidth < 960) {
                scrollWrap.style.height = document.documentElement.clientHeight - menuHead.clientHeight + 'px';
            }
        }

        setScrollWrapHeight();

        window.addEventListener('resize', setScrollWrapHeight);

        let burger = document.querySelector('.header__burger');
        let close = document.querySelector('.menu__close');
        let menu = document.querySelector('.menu');

        burger.addEventListener('click', () => {
            menu.classList.add('open');
            document.body.classList.add('lock');
            header.classList.add('menu-open');
        })

        close.addEventListener('click', () => {
            menu.classList.remove('open');
            document.body.classList.remove('lock');
            header.classList.remove('menu-open');
        })
    }
}


