const boxes = document.querySelectorAll('.box')
let time
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  const triggerBotton = (window.innerHeight / 5) * 4

  boxes.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top

    if (boxTop < triggerBotton) {
      item.classList.add('show')
      document.querySelector('.animation').style.animation = ''
    } else {
      item.classList.remove('show')
      MathRandom()
      document.querySelector(
        '.animation'
      ).style.animation = `${time}s ease-in-out normal none 0s trambling-animation`
    }
  })
}
function MathRandom() {
  time = Math.floor(Math.random() * 8)
  if (time === 0) time = 1
}
