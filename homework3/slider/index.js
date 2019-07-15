var fragToggle = document.createDocumentFragment();

var sectionSlider = document.createElement("section");
sectionSlider.id = "sectionSlider";

var button=document.createElement('div');
button.id="button";
var button1 = document.createElement("div");
button1.id = "button1";
button1.innerText = "\u25ba";
var button2 = document.createElement("div");
button2.id = "button2";
button2.innerText = "\u25c4";

var slider=document.createElement('div');
slider.className='slider';

var slide1 = document.createElement("div");
slide1.id = "slide1"; slide1.className=("slide");
var slide2 = document.createElement("div");
slide2.id = "slide2"; slide2.className=("slide");
var slide3 = document.createElement("div");
slide3.id = "slide3"; slide3.className=("slide");

var img1 = document.createElement("img");
img1.ip = "img1";
img1.src = "https://source.unsplash.com/DjlKxYFJlTc/640x480";
var img2 = document.createElement("img");
img2.ip = "img2";
img2.src = "https://source.unsplash.com/JnB8Gio4GZo/640x480";
var img3 = document.createElement("img");
img3.ip = "img3";
img3.src = "https://source.unsplash.com/iYO-EGosrCo/640x480";

var divPoint=document.createElement("div");
divPoint.className="divPoint";

var point1=document.createElement("span");
point1.id="point1"; point1.className="point";
var point2=document.createElement("span");
point2.id="point2"; point2.className="point";
var point3=document.createElement("span");
point3.id="point3"; point3.className="point";

fragToggle.appendChild(sectionSlider);
sectionSlider.appendChild(slider);
slider.appendChild(slide1);
slider.appendChild(slide2);
slider.appendChild(slide3);
slide1.appendChild(img1);
slide2.appendChild(img2);
slide3.appendChild(img3);
sectionSlider.appendChild(button);
button.appendChild(button1);
button.appendChild(button2);
sectionSlider.appendChild(divPoint);
divPoint.appendChild(point1);
divPoint.appendChild(point2);
divPoint.appendChild(point3);

document.body.appendChild(fragToggle);



button1.addEventListener("click", function () {
  slideNext(1);
})

button2.addEventListener("click", function () {
  slideNext(-1);
})

point1.addEventListener('click', function(){
  slideTo(0);
});
point2.addEventListener('click', function(){
  slideTo(1);
});
point3.addEventListener('click', function(){
  slideTo(2);
})


var currentSlide = 0;
showSlide(currentSlide);

function slideNext(value) {
  showSlide(currentSlide += value);
}

function slideTo(value) {
  showSlide(currentSlide = value);
}

function showSlide(value) {
  var slides = document.querySelectorAll(".slide");
  var points = document.querySelectorAll('.point');
  if (value > 2) {
    currentSlide = 0;
  } else if (value < 0) {
    currentSlide = 2;
  }
  for (let i = 0; i < 3; i++) {
    if (i == currentSlide) {
      slides[i].style.display = "block";
      points[i].classList.add("active");
    } else {
      slides[i].style.display = "none";
      if(points[i].classList.contains('active')) points[i].classList.remove('active');
    }
  }
}