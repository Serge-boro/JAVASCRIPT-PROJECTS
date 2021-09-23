
const  passwordField = document.querySelector('#password-field'),
 	   togglePassword= document.querySelector('.toggle-password'),
 	   passwordPolicies = document.querySelector('.password-policies'),
 	   policyUppercase = document.querySelector('.policy-uppercase'),
 	   policyNumber =document.querySelector('.policy-number'),
 	   policySpecial = document.querySelector('.policy-special'),
 	   policyLength = document.querySelector('.policy-length'),
 	   background = document.querySelector('#background');



  togglePassword.addEventListener("click", () => {
    togglePassword.classList.toggle("active");

    if (passwordField.getAttribute('type') == 'password') {
    	passwordField.setAttribute('type', 'text')
    }else {
    	passwordField.setAttribute('type', 'password')
    }
});

  passwordField.addEventListener('input', (e) => {
	 const input = e.target.value
     const length = input.length
	 const BlurValue = 16 - length *2

    background.style.filter = `blur(${BlurValue}px)`
  })

	passwordField.addEventListener('focus', () => {
		passwordPolicies.classList.add('active')		
	})
	passwordField.addEventListener('blur', () => {
		passwordPolicies.classList.remove('active')
	    
	})

	passwordField.addEventListener('keyup', () => {
	
		let password = passwordField.value

		if(/[A-Z]/.test(password)) {
			policyUppercase.classList.add('active')
		}else {
			policyUppercase.classList.remove('active')		
		}

		if(/[0-9]/.test(password)) {
			policyNumber.classList.add('active')
		}else {
			policyNumber.classList.remove('active')
		}

		if(/[^A-Za-z0-9]/.test(password)) {
			policySpecial.classList.add('active')
		}else {
			policySpecial.classList.remove('active')
		}

		if(password.length > 7 ) {
			policyLength.classList.add('active')
		}else {
			policyLength.classList.remove('active')
		}

		 if(policyUppercase.classList.contains('active') && policyNumber.classList.contains('active') && policySpecial.classList.contains('active') && policyLength.classList.contains('active')) {
	 		RightPassword()
	 	}else {
	 		RedPassword()
		}
	
	})

	
	function RightPassword() {
		passwordField.classList.add('border_true')
		passwordField.classList.remove('border_false')
		passwordField.classList.remove('border_none')
	}

	function RedPassword() {
		passwordField.classList.add('border_false')
	 	 passwordField.classList.remove('border_none')
		passwordField.classList.remove('border_true')
	}