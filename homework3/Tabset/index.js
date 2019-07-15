var fragToggle = document.createDocumentFragment();

var sectionToggle = document.createElement("section");
sectionToggle.id = "section";

var button = document.createElement("div");
button.id = "button";

var htmlBtn = document.createElement("div");
htmlBtn.id = "htmlBtn"; 
var javaScriptBtn = document.createElement("div");
javaScriptBtn.id = "jsBtn"; 
var cssBtn = document.createElement("div");
cssBtn.id = "cssBtn"; 

var content = document.createElement("div");
content.id = "content";

var htmlCnt = document.createElement("div");
htmlCnt.id="htmlCnt";
var jsCnt = document.createElement("div");
jsCnt.id="jsCnt";
var cssCnt = document.createElement("div");
cssCnt.id="cssCnt"

fragToggle.appendChild(sectionToggle);
sectionToggle.appendChild(button);
sectionToggle.appendChild(content);
button.appendChild(htmlBtn);
button.appendChild(javaScriptBtn);
button.appendChild(cssBtn);
content.appendChild(htmlCnt);
content.appendChild(jsCnt);
content.appendChild(cssCnt);

document.body.appendChild(fragToggle);


htmlBtn.innerText = 'html';
jsBtn.innerText = 'js';
cssBtn.innerText = 'css';

htmlCnt.innerText = 'HTML (от англ. HyperText Markup Language- «язык гипертекстовой разметки»)- стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.';
jsCnt.innerText = 'JavaScript- мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262).';
cssCnt.innerText = 'CSS (англ. Cascading Style Sheets каскадные таблицы стилей)- формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.';

htmlCnt.style.display="block";
        htmlBtn.style.borderBottom="none";
        jsCnt.style.display="none";
        cssCnt.style.display="none";

htmlBtn.addEventListener("click", function () {
        htmlCnt.style.display="block";
        jsCnt.style.display="none";
        cssCnt.style.display="none";
        htmlBtn.style.borderBottom="none";
        jsBtn.style.borderBottom="";
        cssBtn.style.borderBottom="";
})
javaScriptBtn.addEventListener("click", function () {
    htmlCnt.style.display="none";
    jsCnt.style.display="block";
    cssCnt.style.display="none";
    htmlBtn.style.borderBottom="";
    jsBtn.style.borderBottom="none";
    cssBtn.style.borderBottom="";
})
cssBtn.addEventListener("click", function () {
    htmlCnt.style.display="none";
    jsCnt.style.display="none";
    cssCnt.style.display="block";
    htmlBtn.style.borderBottom="";
    jsBtn.style.borderBottom="";
    cssBtn.style.borderBottom="1px";

})