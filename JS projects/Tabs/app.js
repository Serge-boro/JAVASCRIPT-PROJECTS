const tabBtn = document.querySelectorAll('.tab-btn'),
  content = document.querySelectorAll('.content'),
  title = document.querySelector('.title h2'),
  about = document.querySelector('.about')

about.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    tabBtn.forEach((item) => {
      item.classList.remove('active')
      e.target.classList.add('active')
    })

    const filter = e.target.dataset.id
    const filterId = document.getElementById(filter)
    content.forEach((item) => {
      item.classList.remove('active')
    })
    filterId.classList.add('active')

    const name = e.target.textContent
    title.textContent = name
  }
})
