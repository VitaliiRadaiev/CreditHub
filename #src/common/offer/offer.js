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
}