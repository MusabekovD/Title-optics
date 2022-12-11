
// main
 let elseBtn = document.getElementById("else");
 let ulWindow= document.querySelector(".ul-window");

 elseBtn.addEventListener("click", function(){
    ulWindow.classList.toggle("active");
 })
    
 let elseBtn2 = document.querySelector(".navbar-bottom #else");
 let ulWindow2= document.querySelector(".navbar-bottom .ul-window");

 elseBtn2.addEventListener("click", function(){
    ulWindow2.classList.toggle("active");
 })
    
