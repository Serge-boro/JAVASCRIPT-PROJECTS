const alert = document.querySelector('.alert'),
  form = document.querySelector('.grocery-form'),
  groceryInp = document.querySelector('#grocery'),
  submitBtn = document.querySelector('.submit-btn'),
  groceryContainer = document.querySelector('.grocery-container'),
  groceryList = document.querySelector('.grocery-list')
clearBtn = document.querySelector('.clear-btn')

let editItem
let triggerItem = false
let editId = ''

const value2 = groceryInp.value
console.log(value2)

form.addEventListener('submit', addAllItem)
clearBtn.addEventListener('click', removeAllItem)
window.addEventListener('DOMContentLoaded', getAllFromLocalStorage)

function addAllItem(e) {
  e.preventDefault()
  const value = groceryInp.value
  const id = new Date().getTime().toString()
  if (value && !triggerItem) {
    addBlockUp('Item added', 'success')
    removeAllBack()
    createListItems(id, value)
    groceryContainer.classList.add('show-container')
    getLocalStorage(id, value)
  } else if (value && triggerItem) {
    addBlockUp('Item changed', 'success')
    editItem.textContent = value
    editLocalStorage(editId, value)
    removeAllBack()
  } else {
    addBlockUp('please Add Item', 'danger')
    removeAllBack()
  }
}
function addBlockUp(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 2000)
}

function removeAllItem() {
  const groceryItem = document.querySelectorAll('.grocery-item')
  groceryItem.forEach((item) => {
    groceryList.removeChild(item)
  })
  groceryContainer.classList.remove('show-container')
  localStorage.removeItem('list')
  addBlockUp('All items deleted', 'danger')
}

function removeEachItem(e) {
  const deleteItem = e.currentTarget.parentElement.parentElement
  const id = deleteItem.dataset.id
  groceryList.removeChild(deleteItem)

  if (groceryList.children.length === 0) {
    groceryContainer.classList.remove('show-container')
  }
  deleteItemLocalStorage(id)
  addBlockUp('Item deleted', 'danger')
}

function editEachItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  editItem = e.currentTarget.parentElement.previousElementSibling

  groceryInp.value = editItem.innerHTML
  triggerItem = true
  editId = element.dataset.id
  submitBtn.textContent = 'edit'
}

function removeAllBack() {
  groceryInp.value = ''
  triggerItem = false
  editId = ''
  submitBtn.textContent = 'submit'
}

function getLocalStorage(id, value) {
  const grosery = { id, value }

  let items = LocalItem()
  items.push(grosery)

  localStorage.setItem('list', JSON.stringify(items))
}

function deleteItemLocalStorage(id) {
  let items = LocalItem()
  items = items.filter((item) => {
    if (item.id !== id) {
      return item
    }
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function editLocalStorage(id, value) {
  let items = LocalItem()
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function LocalItem() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function getAllFromLocalStorage() {
  let items = LocalItem()
  if (items.length > 0) {
    items.forEach((item) => {
      createListItems(item.id, item.value)
    })
    groceryContainer.classList.add('show-container')
  }
}

function createListItems(id, value) {
  const newItem = document.createElement('article')
  newItem.classList.add('grocery-item')
  const attr = document.createAttribute('data-id')
  attr.value = id
  newItem.setAttributeNode(attr)
  newItem.innerHTML = `
          <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
    `
  const removeBtn = newItem.querySelector('.delete-btn')
  const editBtn = newItem.querySelector('.edit-btn')
  removeBtn.addEventListener('click', removeEachItem)
  editBtn.addEventListener('click', editEachItem)

  groceryList.append(newItem)
}
