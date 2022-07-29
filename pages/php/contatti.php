
<?php
$nome = $_POST['nominativo'];
$tel = $_POST['tel'];
$email = $_POST['mail'];
$msg = $_POST['msg'];

$numero_casuale = md5(time());
$cod_delimitatore = "--=NextPart_$numero_casuale";

$tipo_email = "MIME-Version: 1.0\nContent-type: multipart/mixed;\n boundary=\"$cod_delimitatore\"\n\n";
$mittente = "From: $nome <$email>\n$tipo_email";
$destinatario = "customerservice@consenergy.it";
$oggetto = "Modulo Contatti -  Consenergy";
$test_mail = "Messaggio inviato da $nome, \r\n E-Mail: $email, Telefono: $tel, \r\n Di cosa ha bisogno: $msg";

$messaggio_a = "This is a multi-part message in MINE format.\n\n" . "--$cod_delimitatore\n" . "Content-Type:text/plain;charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding:7bit\n\n" . "$test_mail\n\n";

$messaggio = "$messaggio_a";

if (mail($destinatario, $oggetto, $messaggio, $mittente)) {
    Header('Location: https://www.consenergy.it/conferma');
} else {
    echo "Errore. Nessun messaggio inviato.";
}
?>