<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

    if($_POST['METHOD']=='POST'){
        unset($_)
        $objCorreoCli = new stdClass();
        $objCorreoCli->correoRemitente = utf8_decode("ortegaoscar14@gmail.com");
        $objCorreoCli->nombreRemitente = utf8_decode("Administrador ");
        $objCorreoCli->correoDestinatario = utf8_decode("contacto@myjunglebox.com");
        $objCorreoCli->nombreDestinatario = $nombre;
        $objCorreoCli->telefono = $telefono;
        $objCorreoCli->asunto = $asunto;
        $objCorreoCli->mensaje = $mensaje;
        $correoEnviado = $this->envioCorreoCliente ($objCorreoCli);
    }




    function envioCorreoCliente(stdClass $objCorreoCli) {
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 465;
        $mail->Username = "";
        $mail->Password = ""; //aquí colocar la clave del correo anterior	
        $mail->From = $objCorreoCli->correoRemitente;
        $mail->FromName = $objCorreoCli->nombreRemitente;        
        $mail->Subject = $objCorreoCli->asunto;
        $mail->Body = $objCorreoCli->mensaje; 
        $mail->AddAddress($objCorreoCli->correoDestinatario, $objCorreoCli->nombreDestinatario);
        $mail->IsHTML(true);
        if (!$mail->Send()) {
            return $mail->ErrorInfo;
        } else {
            return true;
        }
    }
?>
