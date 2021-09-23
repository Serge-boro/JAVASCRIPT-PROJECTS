function get(selector) {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`Please check ${selector} selector`)
}


filterInput.addEventListener('keyup', (e) => {
  e.preventDefault()
  const value = get('#filterInput').value.toUpperCase()
  const li = document.querySelectorAll('.collection-item')
 
  li.forEach((item) => {
    let a = item.getElementsByTagName('a')[0] 
    if(a.textContent.toUpperCase().startsWith(value)){
       item.style.display = ''
    } else {
        item.style.display = 'none'
    } 
  })
})
 



