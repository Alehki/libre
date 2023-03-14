const menu_icon = document.getElementById(`menu-icon`);
const menu = document.getElementById(`menu`);


menu_icon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`menu--active`);
})