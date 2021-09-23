const btn = document.querySelector('.switch-btn'),
  video = document.querySelector('.video-container'),
  preloder = document.querySelector('.preloder'),
  smallLoading = document.querySelector('.loader2'),
  bigLoading = document.querySelector('.loader')
console.log(bigLoading)

let headHeight, width

window.addEventListener('resize', checkSize)
btn.addEventListener('click', () => {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide')
    preloder.classList.remove('hide-preloader')
    video.pause()
    checkSize()
  } else {
    btn.classList.remove('slide')
    preloder.classList.add('hide-preloader')
    video.play()
    checkSize()
  }
})

window.addEventListener('load', () => {
  preloder.classList.add('hide-preloader')
})

function checkSize() {
  height = video.getBoundingClientRect().height
  width = video.getBoundingClientRect().width

  if (height < 650 || width < 1200 || !btn.classList.contains('slide')) {
    bigLoading.classList.add('hide-preloader')
    smallLoading.classList.remove('hide-preloader')
  } else {
    bigLoading.classList.remove('hide-preloader')
    smallLoading.classList.add('hide-preloader')
  }
}
