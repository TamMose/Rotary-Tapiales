
    if(isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['telefono']) && isset($_POST['mensaje'])){

        //Variables

        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['mensaje'];

        //Informacion
        $contacto="De: $nombre \r\n";
        $contacto .= "Telefono: $telefono \r\n";
        $contacto .= "Correo: $correo \r\n";
        $contacto .= "Mensaje: $mensaje\r\n";
        $contacto .= "Enviado el" .date('d/m/y',time());

        //Destinatarios

        $destino="ruizdavalos@gmail.com";
        $asunto="Prueba de envio de correo";

        if(mail($destino,$asunto, $contacto)){
            echo 1;
        } else{
            echo 0;
        }

    }



    <?php
//Variables

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//Destinatarios

$destino="ruizdavalos@gmail.com";
$asunto="Prueba de envio de correo";

$contacto="De: $nombre \r\n";
$contacto .= "Telefono: $telefono \r\n";
$contacto .= "Correo: $correo \r\n";
$contacto .= "Mensaje: $mensaje\r\n";
$contacto .= "Enviado el" .date('d/m/y',time());


//Enviar mesaje

mail($destino,$asunto, $contacto);

?>

