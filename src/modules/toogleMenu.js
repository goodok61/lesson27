const toogleMenu = () => {
  const btnMenu = document.querySelector(".menu"),
    menu = document.querySelector("menu"),
    handlerMenu = () => menu.classList.toggle("active-menu");

  menu.addEventListener("click", event => {
    let { target } = event;

    if (target.closest("a")) handlerMenu();
  });

  btnMenu.addEventListener("click", handlerMenu);
};
export default toogleMenu;