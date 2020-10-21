const navMenu = document.querySelector(".fa-bars");
const overLay = document.querySelector("#overlay");
const closeMenu = document.querySelector(".fa-times");


function menuDisplay() {
    overLay.classList.toggle('overlay');
    overLay.classList.toggle('hidden');
}

navMenu.addEventListener('click', menuDisplay);
overLay.addEventListener('click', menuDisplay);