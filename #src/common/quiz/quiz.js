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
}