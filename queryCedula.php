<?php 
/*  
    * Funcion para verificar si la llave primaria está en la db
*/

    include('./Conexion.php');

    function queryCedula(){
        $cedula = $_POST['cedula'];

        $conexion = new Conexion();
        $conn = $conexion->conectar();

        $query = 'SELECT * FROM `generales` WHERE cedula = "'.$cedula.'";';

        $result = $conn -> query($query);
        if ($result === false) {
            echo "Falló la consulta: " . $conn->error_list[0];
        } else if ($result->num_rows === 0) {
            return true;
        } else {
            // Aquí se maneja la consulta para mostrar los datos
            return false;
        }
        $conexion->cerrar();
    }

    // Se muestran los datos de la consulta
    $json = json_encode(queryCedula());
    echo($json);
?>