<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$newEmail = $_POST['newEmail'];

$title = "Запрос на рассылку новостей";
$body = "
<h2>Новый запрос на рассылку новостей</h2>
<b>Пользователь с адресом - </b> $newEmail подписался на рассылку новостей!<br> 
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'sedup11@gmail.com'; // Логин на почте
    $mail->Password   = 'transilvaniya11'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sedup11@gmail.com', 'Сергей Дуплий'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('sedup11@gmail.com');  

    

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}
    

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: thankyou.html');


// Отображение результата
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);