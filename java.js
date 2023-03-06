let images = [{
	url: 'imgs/image1.jpg',
	title: 'Rostov-on-Don, Admiral',
	city:'Rostov-on-Don <br> LCD admiral',
	area:'81 m2',
	time: '3.5 months',
    cost: 'Upon request'

},{
	url: 'imgs/image11.png',
	title: 'Sochi Thieves',
	city:'Sochi Thieves',
	area:'105 m2',
	time: '4 months',
    cost: 'Upon request'
	
},{
	url: 'imgs/image13.png',
	title: 'Rostov-on-Don Patriotic',
	city:'Rostov-on-Don Patriotic',
	area:'93 m2',
	time: '3 months',
    cost: 'Upon request'
	
}]

function initSlider() {
	if (!images || !images.length) return;

	let sliderImages = document.querySelector('.completed__images');
	let sliderTitle = document.querySelector('.item__nav');
	let sliderArrows = document.querySelector('.cont__svg');
	let sliderDots = document.querySelector('.slider__dots');
	let sliderCity = document.querySelector('.city');
	let sliderArea = document.querySelector('.area');
	let sliderTime = document.querySelector('.time');
	let sliderCost = document.querySelector('.cost')
	
	initImages();
	initTitle();
	initInfo();
	initArrows();
	initDots();


	function initImages() {
		images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url('${images[index].url}');" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv
       });
	}

	function initTitle() {
		images.forEach((image, index) => {
			let title = `<li class="item__navitem item__link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</li>`;
			sliderTitle.innerHTML += title;
		});

		sliderTitle.querySelectorAll(".item__link").forEach(title => {
			title.addEventListener("click", function(){
				moveSlider(this.dataset.index)
			})

		})
	}

	function initArrows() {
		sliderArrows.querySelectorAll(".svg__arrow").forEach(arrow => {
			arrow.addEventListener("click", function() {
				let curNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;
					if(arrow.classList.contains("left")) {
						nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
					} else {
						nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
					}
					moveSlider(nextNumber);
			});
		});
	}

	function initDots() {
		images.forEach((image, index) => {
			let dot = `<div class="slider__dots-dot n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		});

		sliderDots.querySelectorAll(".slider__dots-dot").forEach(dot => {
			dot.addEventListener("click", function(){
				moveSlider(this.dataset.index);
			})
		})
	}

	 function initInfo() {
		images.forEach((image, index) => {
			let cityDiv = `<p class="city-name n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].city}</p>`;
			sliderCity.innerHTML += cityDiv;
		
			let areaDiv = `<p class="area-name n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].area}</p>`;
			sliderArea.innerHTML += areaDiv;

			let timeDiv = `<p class="time-count n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].time}</p>`;
			sliderTime.innerHTML += timeDiv;

			let costDiv = `<p class="cost-numb n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].cost}</p>`;
      		sliderCost.innerHTML += costDiv
    
	}); 
  }
	
	function moveSlider(num) {
		sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        sliderTitle.querySelector('.active').classList.remove('active');
        sliderTitle.querySelector('.n' + num).classList.add('active');

        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');

        sliderCity.querySelector('.active').classList.remove('active');
        sliderCity.querySelector('.n' + num).classList.add('active');

        sliderArea.querySelector('.active').classList.remove('active');
        sliderArea.querySelector('.n' + num).classList.add('active');

        sliderTime.querySelector('.active').classList.remove('active');
        sliderTime.querySelector('.n' + num).classList.add('active');

        sliderCost.querySelector('.active').classList.remove('active');
        sliderCost.querySelector('.n' + num).classList.add('active')
	}

};

document.addEventListener("DOMContentLoaded", initSlider);