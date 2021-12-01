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

}