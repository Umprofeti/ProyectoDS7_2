<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="./css/Styles.css">
    <title>Proyecto DS7 2</title>
</head>
<body>
    <h1>Proyecto #1 Desarrollo 7</h1>
    <form action="procesar_formulario.php" method="post">

        <label for="prefijo">Prefijo:</label>
        <input type="text" id="prefijo" name="prefijo" required><br><br>

        <label for="tomo">Tomo:</label>
        <input type="text" id="tomo" name="tomo" required><br><br>

        <label for="asiento">Asiento:</label>
        <input type="text" id="asiento" name="asiento" required><br><br>

        <label for="nombre1">Nombre 1:</label>
        <input type="text" id="nombre1" name="nombre1" required><br><br>

        <label for="nombre2">Nombre 2:</label>
        <input type="text" id="nombre2" name="nombre2"><br><br>

        <label for="apellido1">Apellido 1:</label>
        <input type="text" id="apellido1" name="apellido1" required><br><br>
        <label for="apellido2">Apellido 2:</label>
        <input type="text" id="apellido2" name="apellido2"><br><br>

        <label>Género:</label><br>
        <input type="radio" id="generoM" name="genero" value="M">
        <label for="generoM">Masculino</label><br>
        <input type="radio" id="generoF" name="genero" value="F">
        <label for="generoF">Femenino</label><br><br>

        <label>¿Apellido de Casada?:</label><br>
        <input type="radio" id="casadaSi" name="casada" value="Si">
        <label for="casadaSi">Sí</label><br>
        <input type="radio" id="casadaNo" name="casada" value="No">
        <label for="casadaNo">No</label><br><br>

        <label for="apellidoCasada">Apellido de Casada:</label>
        <input type="text" id="apellidoCasada" name="apellidoCasada"><br><br>

        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required><br><br>

        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" name="peso" step="0.01" required><br><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>