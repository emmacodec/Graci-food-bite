let menu = document.querySelector('menu-bar');
let navbar = document.querySelectorAll('.navbar');

menu.addEventlistener("click", mobileMenu);
navbar.forEach(n => n.addEventlistener("click", closeMenu));

function mobileMenu ()  {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
}

function closeMenu () {
    menu-bar.classList.remove("active");
    navbar.classList.remove("active");
}