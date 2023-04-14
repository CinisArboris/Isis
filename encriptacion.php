<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Leer el contenido del archivo
	$fileContent = file_get_contents($_FILES["filePicker"]["tmp_name"]);

	// Encriptar el contenido con la clave y el IV
	$cipherText = openssl_encrypt($fileContent, "AES-256-CBC", $_POST["keyInput"], 0, $_POST["ivInput"]);

	// Mostrar el resultado
	echo $cipherText;
}
?>