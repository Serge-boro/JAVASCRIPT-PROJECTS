const question = document.querySelectorAll('.question')

question.forEach((items) => {
  const btn = items.querySelector('.question-btn')
  btn.addEventListener('click', () => {
    question.forEach((item) => {
      if (item !== items) {
        item.classList.remove('show-text')
      }
    })
    items.classList.toggle('show-text')
  })
})
