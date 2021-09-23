function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw new Error(`Please check ${selection} selector, no such element exist`)
  }
}

class ShowElement {
  constructor(element) {
    this.container = element
    this.list = [...element.querySelectorAll('.img')]

    this.imageName = getElement('.image-name')
    this.mainImg = getElement('.main-img')
    this.modalImages = getElement('.modal-images')
    this.modal = getElement('.modal')
    this.closeBtn = getElement('.close-btn')
    this.prevBtn = getElement('.prev-btn')
    this.nextBtn = getElement('.next-btn')

    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list)
      }
    })
  }
  openModal(selection, list) {
    this.modal.classList.add('open')
    this.showModal(selection)
    this.modalImages.innerHTML = list
      .map((item) => {
        return `
            <img
            src="${item.src}"
            title="${item.title}"
            class="${
              selection.dataset.id === item.dataset.id
                ? 'modal-img selected'
                : 'modal-img'
            }"
            data-id="${item.dataset.id}"
          />
      `
      })
      .join('')

    this.nextBtn.addEventListener('click', () => {
      this.next()
    })
    this.prevBtn.addEventListener('click', () => {
      this.prev()
    })
    this.closeBtn.addEventListener('click', () => {
      this.close()
    })
    this.modalImages.addEventListener('click', (e) => {
      this.shooesItem(e)
    })
  }
  showModal(elenemtShow) {
    this.mainImg.src = elenemtShow.src
    this.imageName.textContent = elenemtShow.title
  }
  close() {
    this.modal.classList.remove('open')
  }
  next() {
    const element = this.modalImages.querySelector('.selected')
    const next =
      element.nextElementSibling || this.modalImages.firstElementChild
    element.classList.remove('selected')
    next.classList.add('selected')
    this.showModal(next)
  }
  prev() {
    const element = this.modalImages.querySelector('.selected')
    const prev =
      element.previousElementSibling || this.modalImages.lastElementChild
    element.classList.remove('selected')
    prev.classList.add('selected')
    this.showModal(prev)
  }
  shooesItem(e) {
    if (e.target.classList.contains('modal-img')) {
      const element = this.modalImages.querySelector('.selected')
      element.classList.remove('selected')
      e.target.classList.add('selected')
      this.showModal(e.target)
    }
  }
}

const nature = new ShowElement(getElement('.nature'))
const city = new ShowElement(getElement('.city'))
