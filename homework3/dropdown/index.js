var fragToggle = document.createDocumentFragment();

var sectionToggle = document.createElement("section");
sectionToggle.id = "section";

var button = document.createElement("div");
button.id = "button";

var containerToggle = document.createElement("div");
containerToggle.id = "container";
var html = document.createElement("div");
html.id = "html"; 
var javaScript = document.createElement("div");
javaScript.id = "js";
var css = document.createElement("div");
css.id = "css";

fragToggle.appendChild(sectionToggle);
sectionToggle.appendChild(button);
sectionToggle.appendChild(containerToggle);
containerToggle.appendChild(html);
containerToggle.appendChild(javaScript);
containerToggle.appendChild(css);

document.body.appendChild(fragToggle);

var menuButton = document.querySelector("#button");

var htmltext = document.querySelector("#html");
var jstext = document.querySelector("#js");
var csstext = document.querySelector("#css");

menuButton.innerText = 'Click me';
htmltext.innerText = 'html';
jstext.innerText = 'js';
csstext.innerText = 'css';
htmltext.style.display="block";
containerToggle.style.display = "none"

menuButton.addEventListener("click", function () {
    if (containerToggle.style.display == "none") {
        containerToggle.style.display = "block"
    } else {
        containerToggle.style.display = "none"
    }
})