<?php
        $objCorreoCli = new stdClass();
        $objCorreoCli->correoRemitente = utf8_decode("ortegaoscar14@gmail.com");
        $objCorreoCli->nombreRemitente = utf8_decode("Administrador ");
        $objCorreoCli->correoDestinatario = utf8_decode("contacto@myjunglebox.com");
        $objCorreoCli->nombreDestinatario = $Nombre;
        $objCorreoCli->telefono = $Telephone;
        $objCorreoCli->asunto = $affair;
        $objCorreoCli->mensaje = $message;
        $correoEnviado = $this->envioCorreoCliente ($objCorreoCli);


    public function envioCorreoCliente(stdClass $objCorreoCli) {
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
