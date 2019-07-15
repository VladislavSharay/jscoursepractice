
var fragToggle = document.createDocumentFragment();

var sectionToggle = document.createElement("section");
sectionToggle.id = "section";

var button1 = document.createElement("div");
button1.id = "button1";
button1.innerText="\u25c4";
var button2 = document.createElement("div");
button2.id = "button2";
button2.innerText="\u25ba";

var img1 = document.createElement("img");
img1.src="/img/1"; 
var img1 = document.createElement("img");
img1.src="/img/2"; 
var img1 = document.createElement("img");
img1.src="/img/3"; 

var span = document.createElement("span");
span.id="close"; 


var cnt = document.createElement("p");
cnt.id="cnt"; 



fragToggle.appendChild(sectionToggle);
sectionToggle.appendChild(button);
sectionToggle.appendChild(modal);
modal.appendChild(span);
modal.appendChild(cnt);


document.body.appendChild(fragToggle);

modal.style.display = "none";


button.innerText = 'Click Me';
span.innerText="\u2716";
cnt.innerText="Здесь какой-то текст";


button.onclick = function() {
    modal.style.display = "block";
  
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }}