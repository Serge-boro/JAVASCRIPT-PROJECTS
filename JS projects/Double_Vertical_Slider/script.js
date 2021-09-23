const sliderContainer = document.querySelector('.slider-container'),
  leftSlide = document.querySelector('.left-slide'),
  rightSlide = document.querySelector('.right-slide'),
  downButton = document.querySelector('.down-button'),
  upButton = document.querySelector('.up-button'),
  sliderLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

/*last slide  move on top: -300vh */
leftSlide.style.top = `-${(sliderLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

changeSlide = (item) => {
  const sliderHeight = sliderContainer.clientHeight

  if (item === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > sliderLength - 1) activeSlideIndex = 0
  } else if (item === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) activeSlideIndex = sliderLength - 1
  }
  /*sliderHeight -counts width slider*/
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
