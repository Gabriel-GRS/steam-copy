let btnMenu = document.querySelector(".cabecalho__menu");
let menuLateral = document.querySelector(".menu-lateral")
btnMenu.addEventListener("click", () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
})