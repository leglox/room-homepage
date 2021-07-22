const sliderTrack = document.querySelectorAll('.slider-track')
const sliderControlPrev = document.querySelector('.slider-controls .control-prev')
const sliderControlNext = document.querySelector('.slider-controls .control-next')
const slidesCount = sliderTrack[0].childElementCount
let counter = 0

sliderControlNext.addEventListener('click', () => {
  if (counter < slidesCount - 1) {
    sliderTrack[0].style.transform = `translateX(${ ++counter * -100 }%)`
    sliderTrack[1].style.transform = `translateX(${ counter * -100 }%)`
  }
})

sliderControlPrev.addEventListener('click', () => {
  if (counter > 0) {
    sliderTrack[0].style.transform = `translateX(${ --counter * -100 }%)`
    sliderTrack[1].style.transform = `translateX(${ counter * -100 }%)`
  }
})