const nav = document.getElementById("nav_links")
const burger = document.getElementById("burger")

function toggleMenu() {
    nav.classList.toggle('nav_active')
    // burger.classList.toggle('crossed_line')
    
    // document.getElementById("nav_links").classList.toggle("nav_active")
    burger.classList.toggle("crossed_line")
}

burger.addEventListener("click", toggleMenu)