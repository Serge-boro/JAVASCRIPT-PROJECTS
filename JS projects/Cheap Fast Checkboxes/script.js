const toggles = document.querySelectorAll('.toggle'),
  good = document.querySelector('#good'),
  cheap = document.querySelector('#cheap'),
  fast = document.querySelector('#fast')

toggles.forEach((item) =>
  item.addEventListener('change', (e) => {
    doTheTrick(e.target)
  })
)
function doTheTrick(item) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === item) fast.checked = false
    if (cheap === item) good.checked = false
    if (fast === item) cheap.checked = false
  }
}
