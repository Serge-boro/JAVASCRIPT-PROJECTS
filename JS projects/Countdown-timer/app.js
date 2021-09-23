const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway'),
  deadline = document.querySelector('.deadline'),
  items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 12, 31, 12, 00, 0)
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const date = futureDate.getDate()

let month = futureDate.getMonth()
month = months[month]
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `Till ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am remain ... `

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()

  const t = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinutes = 60 * 1000

  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinutes)
  let seconds = Math.floor((t % oneMinutes) / 1000)

  const value = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }
  items.forEach((item, idx) => {
    item.innerHTML = format(value[idx])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">if you can read this that's mean time is gone and you are getting enjoyable time </h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()
