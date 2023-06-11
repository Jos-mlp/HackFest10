const menu = document.querySelector('.menu')
const menus = document.querySelector('.menu-navegacion')


menu.addEventListener('click', ()=>{
    menus.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menus.classList.contains('spread') 
        && e.target != menus && e.target != menu){
        console.log('cerrar')
        menus.classList.toggle("spread")
    }
})