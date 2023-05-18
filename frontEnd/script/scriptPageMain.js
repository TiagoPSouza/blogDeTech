const $containerMenu = document.querySelector(".containerMenu");
const $menuBurguer40px = document.querySelector(".menuBurguer40px");
const $closeMenu40px = document.querySelector(".closeMenu40px");
const $navPages = document.querySelector(".frontEnd_nav");
const $checkbox = document.querySelector(".checkbox");

$containerMenu.addEventListener("click", opemCloseMenu);

function opemCloseMenu() {
    console.log("oi")
    if(window.innerWidth < 780) {
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
        $navPages.style.display = "block"
        $closeMenu40px.style.display = "none"
        $menuBurguer40px.style.display = "none"
    } else {
        $navPages.style.display = "none"
        $closeMenu40px.style.display = "none"
        $menuBurguer40px.style.display = "block"
    }
  });

  $checkbox.addEventListener("change", function() {
    document.body.classList.toggle("clear")
  })