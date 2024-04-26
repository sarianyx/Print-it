const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

var slideId = 0;
var theSlide;
var theDot;
var theLegend;

function initSlider(){
	theSlide = document.querySelector(".banner-img");
	theDot = document.querySelector(".dot_selected");
	theDot.classList.remove("dot_selected");
	theDot = document.getElementById("dot0");
	theDot.classList.add("dot_selected");
	theLegend = document.getElementById("legend");
}

initSlider();

let leftArrow = document.getElementById("arrowLeft");
leftArrow.addEventListener("click", prevSlide);

let rightArrow = document.getElementById("arrowRight");
rightArrow.addEventListener("click", nextSlide);

function activeSlide(){
	theSlide.src = "./assets/images/slideshow/"+(slides[slideId].image);
	theSlide.classList.add("banner-img");
	theDot = document.getElementById("dot"+slideId);
	theDot.classList.add("dot_selected");
	theLegend.innerHTML = slides[slideId].tagLine;
}

function nextSlide() {
	if (slideId < slides.length-1){
		slideId++;
	}
	else {
		slideId = 0;
	}
	theSlide.classList.remove("banner-img");
	theDot.classList.remove("dot_selected");
	theLegend.innerHTML = "";
	activeSlide(slideId);
}

function prevSlide() {
	if (slideId > 0){
		slideId = slideId-1;
	}
	else {
		slideId = slides.length-1;
	}
	theSlide.classList.remove("banner-img");
	theDot.classList.remove("dot_selected");
	theLegend.innerHTML = "";
	activeSlide(slideId);
}