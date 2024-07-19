
var sidenavbar = document.getElementById("sidenavbar")
var menubar = document.getElementById("menubar")


menubar.addEventListener("click",function(){
    sidenavbar.style.right= 0
})

var closenav = document.getElementById("closenav")


closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})

//  product search
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entertedvalue = event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        if(productlist[count].textContent.toUpperCase().indexOf(entertedvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="inline"
        }
    }
})