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
}