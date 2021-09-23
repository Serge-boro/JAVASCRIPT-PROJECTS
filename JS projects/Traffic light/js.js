
	const tabs_light_off = document.querySelectorAll('.light_off'),
		  tabs_light_on = document.querySelectorAll('.light_on'),
		  tabsParent = document.querySelector('.lighter'),
		  sound = document.querySelector('#sound'),
		  sound2 = document.querySelector('#sound2'),
		  special = document.querySelector('#special');

	function hideTabContent() {
		tabs_light_on.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		});

		tabs_light_off.forEach(item => {
			item.classList.remove('hide');
			item.classList.add('show');
		});
		
		// sound.pause();
 	// 	sound.currentTime = 0;
	}

	function showTabContent(i = 0) {
		tabs_light_on[i].classList.add('show');
		tabs_light_on[i].classList.remove('hide');

		tabs_light_off[i].classList.remove('show');
		tabs_light_off[i].classList.add('hide');
		
 		
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
			tabs_light_off.forEach((item, i) => {
				if (target == item) {
				hideTabContent();
				showTabContent(i);
				}
			})
			
	});	
	tabs_light_off.forEach(item=> {
	  item.addEventListener('click', () => {
	  	sound2.pause();
 		sound2.currentTime = 0;
	 	sound.play()
	 })	
	})
	special.addEventListener('click', ()=> {
		sound.pause();
 		sound.currentTime = 0;
 		sound2.play()
	})




	// tabsParent.addEventListener('click', ()=> {
 		
 // 		document.querySelector('#sound').play()
 // 	})
 





// let sound1 = document.querySelector('#sound')

// // var promise =  document.querySelector('#sound').play();

// // if (sound !== undefined) {
// //   sound.then(() => {
// //   	setTimeout(()=> {
// //  document.querySelector('#sound').play();
// //   	},2000)
  
// //   }).catch(error => {
// //     console.log(error)
// //   });
// // }
// const sound = new Promise((start, reject) => {

//         setTimeout (() => {    
// 		    sound1.play()
//         },2000);    	
//       });
      
//      	sound.then(() => {
//       	return new Promise ((start, reject)=>{
       

//         setTimeout (() => {
//        sound1 = document.querySelector('#sound').play();
//        	if ( sound1  !== undefined) {
//   		   sound1 .then(() => {
//    			sound1.play()
//   		})
//   	}
//         reject();
//         },2000);
//       }).catch(()=> {
//       console.error('I dont want to escape fron here))')
//       })
//   })
//    