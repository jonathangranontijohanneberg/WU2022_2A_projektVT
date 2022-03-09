const nav = document.getElementById("nav-links")
const burger = document.getElementById("burger")

function toggleMenu() {
    document.getElementById("nav_links").classList.toggle("nav-active")
    burger.classList.toggle("crossed_line")
}

burger.addEventListener("click", toggleMenu)