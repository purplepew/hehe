
const bg = document.querySelector('.bg');
const quote2 = document.querySelector('.quote2');

const innerHeight = window.innerHeight;
const showScaryAt = innerHeight * 1.5;
const showAnimation = innerHeight *.8;
	
window.addEventListener('scroll', ()=>{
	const pageOffset = window.pageYOffset;

	if(pageOffset > showAnimation){
		quote2.style.opacity = 1;
	}

	if(pageOffset > showScaryAt){
		console.log("HEHEHE");
		bg.style.background = "url('background-tainted.jpg') no-repeat fixed";
		
	}

})

window.addEventListener('load', _=>{
	window.scrollTo(0,0);
})