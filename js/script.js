$(document).ready(function()

    {

        $('#btnSend').click(function()
        {
            var validacion='';
            //Validando nombre
            if( $('#name').val() ==''){
                validacion+='<p>Escriba un nombre<p>';
                $('#name').css("border-bottom-color","#f14b4b")
            } else {
                $('#name').css("border-bottom-color","#d1d1d1")
                }
            //Validando correo
            if( $('#email').val() ==''){
                validacion+='<p>Ingrese un Correo electronico<p>';
                $('#email').css("border-bottom-color","#f14b4b")
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