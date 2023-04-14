// Definir la longitud de la clave y el IV
var longitudKEY = 32;
var longitudIV = 16;

// Generar una cadena aleatoria de la longitud especificada
function generateRandomString(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

// Escuchar el evento click del botón de clave aleatoria
document.getElementById("keyButton").addEventListener("click", function() {
	document.getElementById("keyInput").value = generateRandomString(longitudKEY);
});

// Escuchar el evento click del botón de IV aleatorio
document.getElementById("ivButton").addEventListener("click", function() {
	document.getElementById("ivInput").value = generateRandomString(longitudIV);
});

// Escuchar el evento click del botón de encriptar
document.getElementById("encryptButton").addEventListener("click", function() {
	// Verificar que se haya seleccionado un archivo y que se haya introducido una clave y un IV
	if (document.getElementById("filePicker").files.length == 0 || document.getElementById("keyInput").value.length != longitudKEY || document.getElementById("ivInput").value.length != longitudIV) {
		alert("Debe seleccionar un archivo y especificar una clave y un IV válidos.");
		return;
	}

	// Crear un objeto FormData para enviar los datos al servidor
	var formData = new FormData();
	formData.append("filePicker", document.getElementById("filePicker").files[0]);
	formData.append("keyInput", document.getElementById("keyInput").value);
	formData.append("ivInput", document.getElementById("ivInput").value);

	// Realizar una solicitud POST al servidor para encriptar el archivo
	var request = new XMLHttpRequest();
	request.open("POST", "encriptacion.php", true);
	request.onload = function() {
		// Mostrar el resultado en el área de salida
		document.getElementById("outputArea").value = request.responseText;
	};
	request.send(formData);
});

document.getElementById("downloadButton").addEventListener("click", function() {
  // Obtener valores de la clave, el vector de inicialización y el resultado encriptado
  var key = document.getElementById("keyInput").value;
  var iv = document.getElementById("ivInput").value;
  var encryptedResult = document.getElementById("outputArea").value;

  // Crear una cadena de texto que incluya la clave, el IV y el resultado encriptado
  var fileContents = "Clave: " + key + "\nIV: " + iv + "\nResultado encriptado: " + encryptedResult;

  // Crear un objeto Blob con la cadena de texto
  var blob = new Blob([fileContents], {type: "text/plain;charset=utf-8"});

  // Crear una URL para descargar el archivo
  var url = window.URL.createObjectURL(blob);

  // Crear una etiqueta <a> para descargar el archivo
  var link = document.createElement("a");
  link.href = url;
  link.download = "resultados.txt";
  link.click();

  // Liberar los recursos
  window.URL.revokeObjectURL(url);
});
