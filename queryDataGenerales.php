<?php 
/* 
    * Funcion para extraer la data de la tabla generales
*/
include('./Conexion.php');


function queryGenerales(){
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $query = 'SELECT * FROM generales WHERE cedula = "'.$_POST['cedula'].'"';
    $result = $conn -> query($query);
    if ($result === false) {
        echo "Falló la consulta: " . $conn->error_list[0];
    } else {
        // Aquí se maneja la consulta para mostrar los datos
        $datos = [];
        while ($fila = $result->fetch_assoc()) {
            $datos[] = [
                "prefijo" => $fila["prefijo"],
                "tomo" => $fila["tomo"],
                "asiento" => $fila["asiento"],
                "nombre1" => $fila["nombre1"],
                "nombre2" => $fila["nombre2"],
                "apellido1" => $fila["apellido1"],
                "apellido2" => $fila["apellido2"],
                "estado_civil" => $fila["estado_civil"],
                "apellido_casada" => $fila["apellido_casada"],
                "usa_apellido_casada" => $fila["usa_apellido_casada"],
                "provincia" => $fila["provincia"],
                "distrito" => $fila["distrito"],
                "corregimiento" => $fila["corregimiento"],
                "comunidad" => $fila["comunidad"],
                "calle" => $fila["calle"],
                "casa" => $fila["casa"],
                "estado" => $fila["estado"],
                "fecha_nacimiento" => $fila["fecha_nacimiento"],
                "peso" => $fila["peso"],
                "estatura" => $fila["estatura"],
                "condición_fisica" => $fila["condición_fisica"],
                "tipo_de_sangre" => $fila["tipo_de_sangre"],
                "genero" => $fila["genero"],
                "pais" => $fila["pais"]
            ];
        }
        return $datos;
    }
    $conexion->cerrar();
}
// Se muestran los datos de la consulta
$json = json_encode(queryGenerales());
echo($json);
?>