const smallCups = document.querySelectorAll('.cup-small'),
  liters = document.querySelector('#liters'),
  percentage = document.querySelector('#percentage'),
  remained = document.querySelector('#remained')

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highLightCups(idx)
  })
})

function highLightCups(i) {
  if (
    smallCups[i].classList.contains('full') &&
    !smallCups[i].nextElementSibling.classList.contains('full')
  ) {
    i--
  }
  smallCups.forEach((item, idx2) => {
    if (idx2 <= i) item.classList.add('full')
    else item.classList.remove('full')
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    // .cup height: 330px;
    // 1,2,3,4,5,6,7,8  / 8 *330
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
