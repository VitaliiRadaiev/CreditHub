let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('../common/header/header.js');
	@@include('../common/process/process.js');
	@@include('../common/tabs/tabs.js');
	@@include('../common/offer/offer.js');
	@@include('../common/reviews/reviews.js');
	@@include('../common/quiz/quiz.js');

	let wow = new WOW({
		boxClass: '_anim',
		offset: 7,
		live: true,
	})
	wow.init();

});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	@@include('files/dynamic_adapt.js');
	@@include('files/scrollAnimation.js');

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	function checkSwiperChildrenLength() {
		let wrapperAll = document.querySelectorAll('.swiper-wrapper');
		if(wrapperAll.length) {
			wrapperAll.forEach(wrapper => {
				if(wrapper.children.length < 2) {
					wrapper.closest('.swiper-container').classList.add('_one');
				} else {
					wrapper.closest('.swiper-container').classList.add('_multiple');
				}
			})
		}
	}

	checkSwiperChildrenLength();

	let home = document.querySelector('.home-page');
    if(home) {
        let anim1 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.header__logo',
            translateY: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 600,
            delay: 800,
        })
        .add({
            targets:['.menu__link, .header__phone'],
            opacity: [0, 1],
            translateY: ['-100%', '0%'],
            delay: (el, i) => 100 * i,
            duration: 200,
        }, '-=200')
        .add({
            targets: ['.promo__title', '.promo__subtitle', '.promo__group', '.promo__text'],
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=400')
		.add({
            targets: '.promo__img',
            opacity: [0, 1],
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=400')
		.add({
            targets: '.promo__values-title',
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=400')
		.add({
            targets:['.promo__values-list li'],
            opacity: [0, 1],
            translateX: ['-50%', '0%'],
            delay: (el, i) => 100 * i,
            duration: 400,
        }, '-=200')

        let anim2 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.promo-bg',
            scale: [1.1, 1],
            duration: 2000,
            delay: 0,
        })

        let anim3 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.promo-bg__layer-1 img',
            translateY: ['50px', '0px'],
            duration: 2000,
            delay: 0,
        }).add({
            targets: ['.promo-bg__layer-3 > img', '.promo-bg__dec-1 img', '.promo-bg__dec-2 img', '.promo-bg__dec-3 img', '.promo-bg__dec-4 img', '.promo-bg__dec-5 img',],
            translateY: ['50px', '0px'],
            duration: 2000,
            delay: 0,
        }, '-=1000').add({
            targets: '.promo-bg__layer-2 img',
            translateY: ['50px', '0px'],
            duration: 2000,
            delay: 0,
        }, '-=1500')

        window.addEventListener('load', function () {
            anim1.play();
            anim2.play();
            anim3.play();
        })
    } else {
        let anim1 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.header__logo',
            translateY: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 600,
            delay: 800,
        })
        .add({
            targets:['.menu__link, .header__phone'],
            opacity: [0, 1],
            translateY: ['-100%', '0%'],
            delay: (el, i) => 100 * i,
            duration: 200,
        }, '-=200');

        window.addEventListener('load', function () {
            anim1.play();
        })
    }

    let hero = document.querySelector('.hero');
    if(hero) {
        let anim1 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.breadcrumbs',
            translateX: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 700,
            delay: 800,
        })
        .add({
            targets: hero.querySelector('.hero__text-wrap > .btn-default'),
            translateX: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 700,
        }, '-=200')
        .add({
            targets: ['.hero__title', '.hero__btn-group'],
            translateX: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 700,
        }, '-=400')
        .add({
            targets: '.hero__bg',
            opacity: [0, 1],
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=400')

        window.addEventListener('load', function () {
            anim1.play();
        })
    }

    let aboutHero = document.querySelector('.about-hero');
    if(aboutHero) {
        let anim1 = anime.timeline({
            easing: 'easeInOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.breadcrumbs',
            translateX: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 700,
            delay: 800,
        })
        .add({
            targets: '.about-hero__title',
            opacity: [0, 1],
            translateY: ['50%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=200')
        .add({
            targets: '.about-hero__video',
            opacity: [0, 1],
            translateY: ['50%', '0%'],
            easing: 'easeInOutQuad',
            duration: 700,
        }, '-=200')

        window.addEventListener('load', function () {
            anim1.play();
        })
    }
});
