const pictureSize = (imgSelector) => {
	const blocks = document.querySelectorAll(imgSelector);

	function showImg(block) {
		const pictur = block.querySelector('img');
		pictur.src = pictur.src.slice(0, -4) + '-1.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(item=> {
			item.style.display = 'none';
		});
	}

	function hideImg(block) {
		const pictur = block.querySelector('img');
		pictur.src = pictur.src.slice(0, -6) + '.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(item=> {
			item.style.display = 'block';
		});
	}

	blocks.forEach(item => {
		item.addEventListener('mouseover', ()=> {
			showImg(item);
		})
		item.addEventListener('mouseout', ()=> {
			hideImg(item);
		})
	})
}


pictureSize('.sizes-block');