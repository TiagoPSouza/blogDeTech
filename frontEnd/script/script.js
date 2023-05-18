const $containerMenu = document.querySelector(".containerMenu");
const $menuBurguer40px = document.querySelector(".menuBurguer40px");
const $closeMenu40px = document.querySelector(".closeMenu40px");
const $navPages = document.querySelector(".navPages ul");
const $asidePages = document.querySelector(".asidePages ul");
const $checkbox = document.querySelector(".checkbox");

$containerMenu.addEventListener("click", opemCloseMenu);

function opemCloseMenu() {
    if(window.innerWidth < 780) {
        if ($menuBurguer40px.style.display === "block") {
            $navPages.style.display = "block"
            $asidePages.style.display = "block"
            $closeMenu40px.style.display = "block"
            $menuBurguer40px.style.display = "none"
           } else {
            $navPages.style.display = "none"
            $asidePages.style.display = "none"
            $closeMenu40px.style.display = "none"
            $menuBurguer40px.style.display = "block"
           }
    } else {
        if ($menuBurguer40px.style.display === "block") {
            $navPages.style.display = "block"
            $closeMenu40px.style.display = "block"
            $menuBurguer40px.style.display = "none"
           } else {
            $navPages.style.display = "none"
            $closeMenu40px.style.display = "none"
            $menuBurguer40px.style.display = "block"
           }
    }
 }

 window.addEventListener('resize', function() {
    if(window.innerWidth >= 780) {
        $asidePages.style.display = "block"
    } else {
        $asidePages.style.display = "none"
    }
  });

  $checkbox.addEventListener("change", function() {
    document.body.classList.toggle("clear")
  })
 
    
