const dropdownColor = document.querySelector('.dropdown-color'),
    dropdownSize = document.querySelector('.dropdown-size');

function addEvent(el) {
    const dropdownTitle = el.querySelector('.dropdown-title'),
        dropdownWrapper = el.querySelector('.dropdown-wrapper'),
        icon = el.querySelector('.dropdown-icon'),
        items = el.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            dropdownTitle.textContent = item.textContent

            dropdownWrapper.classList.remove('.open')
            icon.classList.remove('.flip')
        })
    })

    dropdownWrapper.classList.toggle('open')
    icon.classList.toggle('flip')
}

dropdownColor.addEventListener('click', () => {
    addEvent(dropdownColor);
})

dropdownSize.addEventListener('click', () => {
    addEvent(dropdownSize);
})

function initCover() {
    const timerElement = document.querySelector('.timer-time');

    function startTimer(duration) {
        let timer = duration;
        let hours, minutes, seconds;
  
        const countdown = setInterval(() => {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            timerElement.textContent = hours + ":" + minutes + ":" + seconds;
    
            if (--timer < 0) {
                clearInterval(countdown);
                startTimer(duration);
            }
        }, 1000);
    }

    if (timerElement) {
        const timerValue = timerElement.dataset.attribute;
        const [hours, minutes, seconds] = timerValue.split(':');
    
        const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    
        startTimer(totalSeconds);
    }
}
  
initCover();

function initProduct() {
    const element = document.querySelector('.hero-slider');
  
    if (element) {
      let productThumbs = new Swiper(".hero-preview-list", {
        spaceBetween: 16,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoHeight: true
      });

      let productSlider = new Swiper(".hero-slider", {
        spaceBetween: 16,
        loop: true,
        loopedSlides: 5,
        thumbs: {
          swiper: productThumbs,
        },
        autoHeight: true
      });
    }
  }
  
initProduct();