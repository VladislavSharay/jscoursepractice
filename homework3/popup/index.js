var fragToggle = document.createDocumentFragment();

var sectionToggle = document.createElement("section");
sectionToggle.id = "section";

var button = document.createElement("button");
button.id = "button";

var modal = document.createElement("div");
modal.id="modal"; 

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


button.addEventListener("click", function () {
    modal.style.display = "block";
  
  })

  span.addEventListener("click", function () {
    modal.style.display = "none";
  })

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })