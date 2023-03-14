const menu_icon = document.getElementById(`menu-icon`);
const menu = document.getElementById(`menu`);


menu_icon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`menu--active`);
})

const form = document.getElementById("from");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const btn = document.getElementById("btn");


btn.addEventListener("click", ()=>{
    
    if(nombre.value && email.value){
        alert("Campos completados correctamente")
    }else{
        alert("Faltan datos....")
        nombre.value = ""
        email.value = ""
    }
})



