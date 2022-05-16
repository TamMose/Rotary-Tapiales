$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('header').addClass('header2');
            $('main').addClass('prueba');
            
        } else{
            $('header').removeClass('header2')
            $('main').removeClass('prueba')
        }
    })
})