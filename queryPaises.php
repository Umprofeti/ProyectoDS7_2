<?php 
include('./Conexion.php');


function SelectPaises(){
$conexion = new Conexion("localhost", "root", "", "ds7");
$conn = $conexion->conectar();

$query = 'SELECT * FROM paises ORDER BY pais';
$result = $conn -> query($query);

if ($result === false) {
    echo "Falló la consulta: " . $conn->error_list[0];
} else {
    // Aquí se maneja la consulta para mostrar los datos
    $datos = [];
    while ($fila = $result->fetch_assoc()) {
        $datos[] = [
            "codigo" => $fila["codigo"],
            "pais" => $fila["pais"]
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