let sighName
let sighPasword
const form2 = document.querySelector('.form2'),
  form = document.querySelector('.form')

function get() {
  document.querySelector('.container').classList.toggle('active')
  document.querySelector('section').classList.toggle('active')
}

document.querySelector('.toggle').addEventListener('click', get)
document.querySelector('.sightIn').addEventListener('click', get)

form2.addEventListener('submit', (e) => {
  e.preventDefault()
  const sighRepeatPasword = document.querySelector('#sighRepeatPasword')
  sighName = form2.elements.sighName.value
  sighPasword = form2.elements.sighPasword.value
  const sighRepPasword = sighRepeatPasword.value
  if (
    sighName != '' &&
    sighPasword != '' &&
    sighPasword != null &&
    sighName != null
  ) {
    if (sighPasword === sighRepPasword) {
      console.log({
        usename: sighName,
        password: sighPasword,
      })
      form2.reset()
      get()
    } else {
      console.log(`I'm sorry please check the Confirm Password`)
    }
  } else {
    console.log(`Nooo,try again`)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const repeatName = document.querySelector('#repeatName')
  const repeatPassword = document.querySelector('#repeatPassword')

  let value = repeatName.value
  let value2 = repeatPassword.value
  if (sighName === value && sighPasword === value2) {
    console.log('Congratulation, you was success and have a glorious day')
    form.reset()
  }
})
