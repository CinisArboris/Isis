<!DOCTYPE html>
<html>
<head>
	<title>Encriptación AES-CBC</title>
	<link rel="stylesheet" type="text/css" href="encriptacion.css">
</head>
<body>
	<h1>Encriptación AES-CBC</h1>
	<form enctype="multipart/form-data" method="post">
		<label for="filePicker">Seleccionar archivo PHP:</label>
		<input type="file" id="filePicker" name="filePicker" accept=".php"><br><br>

		<div style="display: flex; flex-wrap: wrap;">
			<div style="flex: 1; margin-right: 5px;">
				<label for="keyInput">Clave:</label>
				<input type="text" id="keyInput" name="keyInput" maxlength="32" size="50" placeholder="Introducir clave de 32 caracteres"><br>
				<button type="button" id="keyButton">Generar clave aleatoria</button>
				<p>Ejemplo de clave: 1234567890abcdef1234567890abcdef</p>
			</div>
			<div style="flex: 1; margin-left: 5px;">
				<label for="ivInput">Vector de inicialización (IV):</label>
				<input type="text" id="ivInput" name="ivInput" maxlength="16" size="25" placeholder="Introducir IV de 16 caracteres"><br>
				<button type="button" id="ivButton">Generar IV aleatorio</button>
				<p>Ejemplo de IV: 1234567890abcdef</p>
			</div>
		</div>

		<button type="button" id="encryptButton">Encriptar</button>
		<button type="button" id="downloadButton">Descargar resultados</button>

		<label for="outputArea">Resultado:</label><br>
		<textarea id="outputArea" name="outputArea" rows="10" cols="80" readonly></textarea>
	</form>
	<script src="encriptacion.js"></script>
</body>
</html>
