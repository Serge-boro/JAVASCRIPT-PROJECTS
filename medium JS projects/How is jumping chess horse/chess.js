let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]
let green
const draw = () => {
  let out = ''
  let m = 0

  for (let i = 0; i < chess.length; i++) {
    for (let k = 0; k < chess.length; k++) {
      if (m % 2 == 0) {
        out += `<div class="chess-block bg-black" data-x=${k} data-y=${i}></div>`
      } else {
        out += `<div class="chess-block" data-x=${k} data-y=${i}></div>`
      }
      m++
    }
    m++
  }

  document.querySelector('.field').innerHTML = out

  document.querySelectorAll('.chess-block').forEach((item) => {
    item.addEventListener('click', function (e) {
      remove()

      const x = e.target.dataset.x
      const y = e.target.dataset.y
      item.classList.add('green')

      if (parseInt(x) + 2 < chess.length && parseInt(y) + 1 < chess.length) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) + 2}'][data-y='${
              parseInt(y) + 1
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) + 2 < chess.length && parseInt(y) - 1 >= 0) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) + 2}'][data-y='${
              parseInt(y) - 1
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) - 2 >= 0 && parseInt(y) + 1 < chess.length) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) - 2}'][data-y='${
              parseInt(y) + 1
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) - 2 >= 0 && parseInt(y) - 1 >= 0) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) - 2}'][data-y='${
              parseInt(y) - 1
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) + 1 < chess.length && parseInt(y) - 2 >= 0) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) + 1}'][data-y='${
              parseInt(y) - 2
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) - 1 >= 0 && parseInt(y) - 2 >= 0) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) - 1}'][data-y='${
              parseInt(y) - 2
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) + 1 < chess.length && parseInt(y) + 2 < chess.length) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) + 1}'][data-y='${
              parseInt(y) + 2
            }']`
          )
          .classList.add('active')
      }
      if (parseInt(x) - 1 >= 0 && parseInt(y) + 2 < chess.length) {
        document
          .querySelector(
            `.chess-block[data-x='${parseInt(x) - 1}'][data-y='${
              parseInt(y) + 2
            }']`
          )
          .classList.add('active')
      }
    })
  })
}
draw()

function remove() {
  document.querySelectorAll('.chess-block').forEach((item) => {
    item.classList.remove('green')
    item.classList.remove('active')
  })
}