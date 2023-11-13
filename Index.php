<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="./css/Styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
</head>

<body>
    <main>
        <div class="optionsSenders">
            <button class="buttonSender">Crear</button>
            <button class="buttonSender">Actualizar</button>
            <button class="buttonSender">Cheque</button>
            <button class="buttonSender">Salir</button>
        </div>
        <form id="form_sender">
            <div class="wrapper" id="wrapperCedula">
                <label for="prefijo">Prefijo:</label>
                <select id="prefijo" name="prefijo" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>E</option>
                    <option>PE</option>
                    <option>AV</option>
                </select><br><br>

                <label for="tomo">Tomo:</label>
                <input type="text" id="tomo" name="tomo" required maxlength="3"><br><br>

                <label for="asiento">Asiento:</label>
                <input type="text" id="asiento" name="asiento" required maxlength="5"><br><br>
            </div>
            <div class="wrapper">
                <label for="nombre1">Nombre 1:</label>
                <input type="text" id="nombre1" name="nombre1" required><br><br>

                <label for="nombre2">Nombre 2:</label>
                <input type="text" id="nombre2" name="nombre2"><br><br>
            </div>
            <div class="wrapper">
                <label for="apellido1">Apellido 1:</label>
                <input type="text" id="apellido1" name="apellido1" required><br><br>
                <label for="apellido2">Apellido 2:</label>
                <input type="text" id="apellido2" name="apellido2"><br><br>
            </div>
            <div class="wrapper">
                <div class="wrapper">
                    <label>Género:</label>
                    <div class="label-radioButton">
                        <label for="generoM">M</label>
                        <input type="radio" id="generoM" name="genero" value="M">
                    </div>
                    <div class="label-radioButton">
                        <label for="generoF">F</label>
                        <input type="radio" id="generoF" name="genero" value="F">
                    </div>
                </div>
                <div class="wrapper">
                        <label>Estado civil:</label>
                        <select id="scivil" name="scivil" required>
                            <option value="Soltero(a)">Soltero(a)</option>
                            <option value="Casado(a)">Casado(a)</option>
                            <option value="Divorciado(a)">Divorciado(a)</option>
                            <option value="Viudo(a)">Viudo(a)</option>
                        </select>
                    </div>
                <div class="wrapper">
                    <label>¿Apellido de Casada?:</label>
                    <div class="label-radioButton">
                        <label for="casadaSi">Sí</label>
                        <input type="radio" id="casadaSi" name="casada" value="Si">
                    </div>
                    <div class="label-radioButton">
                        <label for="casadaNo">No</label>
                        <input type="radio" id="casadaNo" name="casada" value="No">
                    </div>
                </div>
            </div>
            <label for="apellidoCasada">Apellido de Casada:</label>
            <input type="text" id="apellidoCasada" name="apellidoCasada"><br><br>

            <div class="wrapper">
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" required><br><br>

                <label for="peso">Peso (lbs):</label>
                <input type="number" id="peso" name="peso" step="0.01" min="5" placeholder="120lbs" required><br><br>
            </div>
            <div class="wrapper">
                <label>Estatura (mts):</label>
                <input type="number" id="estatura" name="Estatura" step="0.01" min="1" max="2.24" placeholder="1.5"
                    required />

                <label>Tipo de Sangre: </label>
                <select name="TipoSangre" id="TipoSangre">
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            <label for="CMedica">Condición Médica:</label>
            <input type="text" name="CMedica" id="CMedica" />

            <div class="wrapper">
                <!-- Los datos procedentes de esto vendrán desde una base de datos en donde se encontrarán todos los países -->
                <label for="Pais">País:</label>
                <select name="Pais" id="Pais">
                </select>
                <label for="Provincia">Provincia:</label>
                <select name="Provincia" id="Provincia">
                </select>
                <label for="Distrito">Distrito:</label>
                <select name="Distrito" id="Distrito">
                </select>
                <label for="Corregimiento">Corregimiento:</label>
                <select name="Corregimiento" id="Corregimiento">
                </select>
            </div>
            <div class="wrapper">
                <label for="Comunidad">Comunidad:</label>
                <input type="text" id="Comunidad" />
                <label for="Calle">Calle:</label>
                <input type="text" name="Calle" id="Calle">
                <label for="Casa">Casa:</label>
                <input type="text" name="Casa" id="Casa">
            </div>
            <input type="submit"  id="btn_Submit" value="Enviar">
        </form>
    </main>
    <footer>

    </footer>
</body>
<script src="./js/index.js"></script>

</html>