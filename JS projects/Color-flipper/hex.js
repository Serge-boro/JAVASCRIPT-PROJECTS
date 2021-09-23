const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('#btn'),
  color = document.querySelector('.color')

btn.addEventListener('click', () => {
  let currentColor = '#'

  for (let i = 0; i < 6; i++) {
    currentColor += hex[randomItem()]
  }
  document.body.style.backgroundColor = currentColor
  color.textContent = currentColor
})

function randomItem() {
  return Math.floor(Math.random() * hex.length)
}
