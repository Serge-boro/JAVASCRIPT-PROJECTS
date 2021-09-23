const search = document.querySelector('.search'),
      btn =document.querySelector('.btn'),
      input =document.querySelector('.input'),
      newDiv = document.querySelector(".newDiv");

      btn.addEventListener('click', ()=> {
      	 search.classList.toggle('active');
      	  input.focus();

      	 const value = input.value;
		 input.value="";
      	 newDiv.innerHTML = value;
      })

    