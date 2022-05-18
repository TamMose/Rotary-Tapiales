const btnMenu= document.querySelector("#btnMenu");
const menu= document.querySelector("#menu");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
})

const submenuBtn= document.querySelectorAll(".submenu-btn");

for(let i=0; i<submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth<1024){
            const subMenu = this.nextElementSibling;
            const height= subMenu.scroll
        }
    })
}