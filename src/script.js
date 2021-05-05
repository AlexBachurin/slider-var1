window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const slides = document.querySelectorAll('.slider__slide'),
          prevBtn = document.querySelector('.slider__btn_prev'),
          nextBtn = document.querySelector('.slider__btn_next');
    
    let counter = 0;
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //check if reached last slide
        if (counter === slides.length - 1) {
            //reset to first slide
            counter = 0;
            moveSlide();
        } else {
            counter++;
            moveSlide();
        }          
    })

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //check if we on first slide
        if (counter === 0) {
            //reset to last
            counter = slides.length - 1;
            moveSlide();
            
        } else {
            counter--;
            moveSlide();
        }
    })

    //helper to move slides
    function moveSlide() {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${counter*100}%)`;
        })
    }
})