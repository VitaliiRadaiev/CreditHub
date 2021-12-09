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

	//SlideToggle
function _slideUp(target, duration = 500) {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideDown (target, duration = 500) {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideToggle (target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================







//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================






function createTabs(containerName = false, triggersName = false, tabsName = false) {
	let container = document.querySelector(`${containerName}`);
	if (container) {
		let allTriggers = container.querySelectorAll(`${triggersName}`);
		let allTabs = container.querySelectorAll(`${tabsName}`);

		if (allTriggers.length) {
			allTriggers.forEach(trigger => {
				trigger.addEventListener('click', (e) => {
					e.preventDefault();
					const id = trigger.getAttribute('href').replace('#', '');

					trigger.classList.add('active');

					allTriggers.forEach(i => {
						if (i == trigger) {
							return
						}
						i.classList.remove('active');
					});

					allTabs.forEach(tab => {
						if (tab.id == id) {
							tab.classList.add('active')
						} else {
							tab.classList.remove('active');
						}
					})

				})
			})
		}

	}
}

//createTabs('.tabs', '.tab-trigger', '.tab-content')


function setSameHeight(items) {
    if(!items.length) return;

    let maxHeight = Math.max(...Array.from(items).map(i => i.clientHeight));
    items.forEach(i => i.style.minHeight = maxHeight + 'px');
}

function setCounterAnim() {
	let couterItems = document.querySelectorAll('[data-counter]');
    if (couterItems) {
        couterItems.forEach(item => {
            let animation = anime({
                targets: item,
                textContent: [0, item.dataset.counter || 0],
                round: 1,
                easing: 'linear',
                autoplay: false,
                duration: 1000
            });
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= 0.7) {
                            animation.play();
                            observer.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.7
                }
            );

            observer.observe(item);
        })
    }
}

setCounterAnim();

let anchors = document.querySelectorAll('.anchor');
if(anchors.length) {
	anchors.forEach(anchor => {
		if(!anchor.getAttribute('href').match(/#\w+$/gi)) return;
		
		let id = anchor.getAttribute('href').match(/#\w+$/gi).join('').replace('#', '');
		anchor.addEventListener('click', (e) => {

			let el = document.getElementById(id);
			if(el) {
				e.preventDefault();
				window.scrollTo({
					top: el.offsetTop,
					behavior: 'smooth',
				})
			}

		})
	})
}

function trimString(el, stringLength = 0) {
	let str = el.innerText;
	if(str.length <= stringLength) return;
	el.innerText = [...str].slice(0, stringLength).join('') + '...';
};
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


;
	{
	const slider = document.querySelector('.process__slider');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth > 575.98 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    speed: 800,
                    freeMode: true,
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth < 576) {
				slider.dataset.mobile = 'false';

				if(slider.querySelector('.swiper-container').classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};
	{
    let tabsAll = document.querySelectorAll('.tabs');
    if(tabsAll.length) {
        tabsAll.forEach(tabs => {
            let allTriggers = tabs.querySelectorAll('.tabs__trigger');
            let allContent = tabs.querySelectorAll('.tabs__content');

            allTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    let id = trigger.dataset.tab;
                    trigger.classList.add('active');
        
                    allTriggers.forEach(t => {
                        if(t === trigger) return;
                        t.classList.remove('active');
                        
                    })

                    allContent.forEach(content => {
                        if(id === content.dataset.tab) {
                            content.classList.add('active');
                        } else {
                            content.classList.remove('active');
                        }
                    })
                })
            })
        })
    }
};
	{
    let offerSlider = document.querySelector('.slider-offer');
    if(offerSlider) {
        let dataSlider = new Swiper(offerSlider.querySelector('.swiper-container'), {

            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
        
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            loop: true,
            watchOverflow: true,
            pagination: {
            	el: offerSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });
    }
};
	{
    let reviewsSlider = document.querySelector('.reviews__slider');
    if(reviewsSlider) {
        let dataSlider = new Swiper(reviewsSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },

            speed: 800,
            loop: true,
            pagination: {
            	el: reviewsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
            },

        });
    }
};
	{
    let quizSlider = document.querySelector('.quiz__slider');
    if(quizSlider) {
        let dataSlider = new Swiper(quizSlider.querySelector('.swiper-container'), {
            observer: true,
            observeParents: true,
            speed: 800,
            pagination: {
            	el: quizSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            breakpoints: {
                320: {
                    direction: 'horizontal',
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                576: {
                    direction: 'vertical',
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
            },

        });

        let quizItems = quizSlider.querySelectorAll('.quiz-radio-checkbox');
        if(quizItems.length) {
            quizItems.forEach(item => {
                let input = item.querySelector('input');
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dataSlider.slideNext();
                    input.checked = true; 
                })
            })
        }
    }
};

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

	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);

					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
			
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);


		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}

	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
			
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
			
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}


	dynamicAdapt();

	
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}

	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	
const animItems = document.querySelectorAll('._anime');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					//animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
};

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
            targets: document.querySelector('.hero > .btn-default'),
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
