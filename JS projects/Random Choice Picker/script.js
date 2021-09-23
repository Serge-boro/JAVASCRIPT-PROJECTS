const tagsEl = document.querySelector('#tags'),
  textarea = document.querySelector('#textarea')

textarea.focus()
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(i) {
  const tags = i
    .split(',')
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim())
  console.log(tags)

  tagsEl.innerHTML = ''

  tags.forEach((item) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = item
    tagsEl.appendChild(tagEl)
  })
}

function pickRandomTag() {
  const randomtags = document.querySelectorAll('.tag')
  return randomtags[Math.floor(Math.random() * randomtags.length)]
}

function highLightTag(item) {
  item.classList.add('highlight')
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highLightTag(randomTag)
  }, 2000)
  setTimeout(() => {
    clearInterval(interval)
  }, 3000)
}
