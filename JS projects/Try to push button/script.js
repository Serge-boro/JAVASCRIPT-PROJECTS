const input = document.querySelector('#field'),
  btn = document.querySelector('.btn'),
  text = document.querySelector('#text'),
  search = document.querySelector('.search')

let element
let count

search.addEventListener('submit', getElement)

function getElement(e) {
  e.preventDefault()
}

input.addEventListener('keyup', () => {
  element = input.value
  count = input.value.length
  counting()
})

btn.addEventListener('click', () => {
  const newItems = document.createElement('p')
  text.append(newItems)
  count = 0
  counting()
  const shotItem = lengthText(element, 10)
  newItems.innerHTML = shotItem
  input.value = ''
})

function lengthText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

function counting() {
  return count > 0 ? (btn.disabled = false) : (btn.disabled = true)
}
