$(document).ready(function()

    {
        let correoValido=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

        $('#btnSend').click(function()
        {
            let validacion='';



            //Validando nombre
            if( $('#name').val() ==''){
                validacion+='<p>Escriba un nombre<p>';
                $('#name').css("border-bottom-color","#f14b4b")
            } else {
                $('#name').css("border-bottom-color","#d1d1d1")
                }
                //Validando telefono
            if( $('#phone').val() ==''){
                validacion+='<p>Escriba un numero de telefono<p>';
                $('#phone').css("border-bottom-color","#f14b4b")
            } else {
                $('#phone').css("border-bottom-color","#d1d1d1")
                }
            //Validando correo

            if( $('#email').val() ==''){
                validacion+='<p>Ingrese un Correo electronico<p>';
                $('#email').css("border-bottom-color","#f14b4b")
            } else if (correoValido.test($('#email').val())){
                validacion+='<p>El correo ingresado no es valido<p>';
                $('#email').css("border-bottom-color","#d1d1d1")
                
            } else { 
                $('#email').css("border-bottom-color","#d1d1d1")

            }

            //Validando mensaje
            if( $('#mensaje').val() ==''){
                validacion+='<p>Escriba un mensaje<p>';
                $('#mensaje').css("border-bottom-color","#f14b4b")
            } else {
                $('#mensaje').css("border-bottom-color","#f14b4#d1d1d1")
            }


            if(validacion== '' == false){
                var mensajeModal='<div class="modalWrap">'+
                                    '<div class="mensajeModal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        validacion+
                                        '<span id="btnClose">Cerrar</span>'
                                    '</div>'+
                                '</div>'

                $('body').append(mensajeModal);
            }
        //Botton Cerrar
        $('#btnClose').click(function() {
            $('.modalWrap').remove();
        });
    });
});