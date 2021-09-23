const addBtn = document.querySelector('#add'),
  clearAll = document.querySelector('#clear')

const textN = JSON.parse(localStorage.getItem('textNode'))

if (textN) {
  textN.forEach((item) => addNewNote(item))
}

addBtn.addEventListener('click', () => addNewNote(''))

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')
  document.body.appendChild(note)

  note.innerHTML = `
		<div class="tools">
				<button class="edit"><i class="fas fa-edit"></i></button>
				<button class="copy"><i class="far fa-clipboard"></i></button>
				<button class="delete"><i class="fas fa-trash-alt"></i></button>	
			</div>

			<div class="main ${text ? '' : 'hidden'}"></div>
			<textarea class="${text ? 'hidden' : ''}"></textarea>
		`

  const editBtn = note.querySelector('.edit'),
    deleteBtn = note.querySelector('.delete'),
    copyBtn = note.querySelector('.copy'),
    main = note.querySelector('.main'),
    textarea = note.querySelector('textarea')

  textarea.value = text
  main.innerHTML = marked(text)

  textarea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
    updateLS()
  })

  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  const notes = document.querySelectorAll('.note')
  clearAll.addEventListener('click', () => {
    notes.forEach((item) => {
      item.remove()
    })
  })

  copyBtn.addEventListener('click', () => {
    textarea.select()
    document.execCommand('copy')
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
  })

  $(function () {
    $(note).draggable()
  })
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')
  const notes = []
  notesText.forEach((item) => notes.push(item.value))
  localStorage.setItem('textNode', JSON.stringify(notes))
}

clearAll.addEventListener('click', () => {
  localStorage.removeItem('textNode')
})
