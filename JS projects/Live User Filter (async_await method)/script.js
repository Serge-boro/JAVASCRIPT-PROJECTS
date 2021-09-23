
 const resultItems = document.querySelector('#result'),
  inputFilter = document.querySelector('#filter'),
  loading = document.querySelector('.user-list h3'),
  listItems = [];

  const url = 'https://randomuser.me/api';
  
getData()

async function getData() {
  loading.classList.add('loading')
  try {
    const response = await fetch(url + '?results=50')
    const { results } = await response.json()
    results.innerHTML = ''
    loading.classList.remove('loading')
    results.forEach((item) => {
      let li = document.createElement('li')
      resultItems.appendChild(li)
      listItems.push(li)

      li.innerHTML = `
									<img src = "${item.picture.large}" alt="">
									<div class ="user-info">
										<h4>${item.name.first} ${item.name.last}</h4>
										<p>${item.location.city}, ${item.location.country}</p>
									</div>
								`
    })
  } catch (error) {
    console.log(error)
  }
}

inputFilter.addEventListener('input', (e) => {
  filterDate(e.target.value)
})

function filterDate(filterItem) {
  listItems.forEach((item) => {
    loading.classList.add('loading')
    setTimeout(() => {
      loading.classList.remove('loading')
    }, 300)
    if (item.innerText.toLowerCase().includes(filterItem.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
