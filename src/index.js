import "./style.css"



const closeMenu = function eventListener(event) {
    event.currentTarget.classList.remove("clicked")
    event.currentTarget.removeEventListener("click",closeMenu)
    event.currentTarget.addEventListener("click", openMenu)
}

const openMenu = function eventListener(event) {
    event.currentTarget.classList.add("clicked")
    event.currentTarget.removeEventListener("click", openMenu)
    event.currentTarget.addEventListener("click", closeMenu)
}

const ball = document.querySelector(".ball")
ball.addEventListener("click", openMenu)