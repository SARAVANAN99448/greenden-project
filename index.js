
var sidenavbar = document.getElementById("sidenavbar")
var menubar = document.getElementById("menubar")


menubar.addEventListener("click",function(){
    sidenavbar.style.right= 0
})

var closenav = document.getElementById("closenav")


closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})