function closeMenu () {
    let menu = document.querySelector("#menuSlide");
    menu.style.transform = "scaleX(0)";
}

function openMenu () {
    let menu = document.querySelector("#menuSlide");
    menu.style.transform = "scaleX(1)";
}

function navSticky () {
    let header = document.querySelector("header");
    let logo = document.querySelector("header img");
    //logo.style = "position : relative ; max-height : 8em; width:auto; top : 0; left: 0";
    header.id = "headersticky";

}

function navNormal () {
    let header = document.querySelector("header");
    let logo = document.querySelector("header img");
    header.removeAttribute("id");
}
















document.addEventListener('scroll', function(){
    let page = document.querySelector("body");
  
    if(page.scrollTop>10){
        navSticky();
    }
    else {
        navNormal();
    }
});