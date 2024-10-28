<?php

require '../connect.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require '../../email/vendor/autoload.php';

include_once("../db_connect.php");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    $code_v = trim($request->code_v);
    $Nech = trim($request->Nech);
    $Tech = trim($request->Tech);
    $domaine = trim($request->domaine);
    $machine = $request->machine ;
    $email = mysqli_real_escape_string($mysqli, trim($request->email));




$mail = new PHPMailer(true) ;





$mail->SMTPOptions = array(
'ssl' => array(
'verify_peer' => false,
'verify_peer_name' => false,
'allow_self_signed' => true
)
);

$mail->isSMTP();


$mail->SMTPDebug = SMTP::DEBUG_SERVER;


$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = '';
//$mail->SMTPSecure = 'ssl';
//$mail->SMTPDebug = 2;
$mail->Port = 465;

$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

$mail->setFrom('salaheddine.ouirra@edu.uiz.ac.ma', 'Erevn LAB');
$mail->addReplyTo('who@exemple.com', 'John Doe');

$mail->addAddress($email); 

$mail->isHTML(true);





$mail->Subject = "Verification Email";
$mail->addEmbeddedImage('./eminem.jpg', 'image_cid');

$mail->Body = $mail->Body    = '<h1>EREVNA LAB</h1> <br> <p>Votre Code de Validation: <b style="font-size: 30px;">' . $code_v . '</b></p> <br> <h4> plan d\'analyse </h4> <p>votre demande est : </p>  <br> <table>
  <tr>
    <th>Numero d\'echantillons</th>
    <th>type d\echantillons</th>
    <th>domaine</th>
    <th>machine</th>
  </tr>
  <tr>
    <td>' . $Nech . '</td>
    <td>' . $Tech . '</td>
    <td>' . $domaine . '</td>
    <td>' . $machine . '</td>
  </tr> </table>';
$mail->AltBody = 'This is the plain text version of the email content';

if(!$mail->send()){
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}else{
    echo 'Message has been sent';

}


}

/*function save_mail($mail)
{
    //You can change 'Sent Mail' to any other folder or tag
    $path = '{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail';

    //Tell your server to open an IMAP connection using the same username and password as you used for SMTP
    $imapStream = imap_open($path, $mail->Username, $mail->Password);

    $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
    imap_close($imapStream);

    return $result;
}
*/



?>





