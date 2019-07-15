
var dropdownBtn=document.querySelector("#dropdown");

var dropdownCnt=document.querySelector("#content");


dropdownCnt.style.display= "none" ;


dropdownBtn.addEventListener("click", function() {
    if (dropdownCnt.style.display == "none")

   {dropdownCnt.style.display = "block"}

else

   {dropdownCnt.style.display = "none"}

})

