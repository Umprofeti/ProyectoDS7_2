<?php 
include('./Conexion.php');


function SelectPaises(){
$conexion = new Conexion();
$conn = $conexion->conectar();

$query = 'SELECT * FROM provincia ORDER BY nombre_provincia';
$result = $conn -> query($query);

if ($result === false) {
    echo "Falló la consulta: " . $conn->error_list[0];
} else {
    // Aquí se maneja la consulta para mostrar los datos
    $datos = [];
    while ($fila = $result->fetch_assoc()) {
        $datos[] = [
            "codigo" => $fila["codigo_provincia"],
            "provincia" => $fila["nombre_provincia"]
        ];
    }
    return $datos;
}
$conexion->cerrar();
}
// Se muestran los datos de la consulta
$json = json_encode(SelectPaises());
echo($json);
?>