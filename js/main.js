let OpenBtn = document.querySelector(".site-header__btn");

OpenBtn.addEventListener("click" , function() {
    OpenBtn.closest(".site-header").classList.toggle("shownav")
})