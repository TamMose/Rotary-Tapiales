addEventListener('DOMContentLoaded',()=>{
    const btn_menu= document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items=document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
$('.menu ul li ul').hide();


if($(window).width()> 600){
    
    $('.menu ul li').bind('mousemove', function() {

        $(this).children("ul").fadeIn(200);
    })
    $('.menu ul li').bind('mouseleave', function() {

        $(this).children("ul").fadeOut(499);
    })
}else{
    

    let show_menu1=0;


    $('.menu ul li').bind('click', function() {
        
        if(show_menu1 == 0){
            $(this).children("ul").slideDown();
            show_menu1=1;
        }else {
            $(this).children("ul").slideUp();
            show_menu1=0;
        }
    })
    
    $('.menu ul li').on('click', function(event){
        event.stopImmediatePropagation();
    })
}


/* const btn_menu= document.querySelector(".btn_menu");
const menu= document.querySelector(".menu_items");

btn_menu.addEventListener("click", function(){
    menu.classList.toggle("show");
}) */