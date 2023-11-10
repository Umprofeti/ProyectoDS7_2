<?php 
include('./Conexion.php');

function SelectPaises(){
$codigo = $_POST['codigo'];
$conexion = new Conexion();
$conn = $conexion->conectar();

$query = 'SELECT * FROM corregimiento WHERE codigo_distrito = '.$codigo.' ORDER BY nombre_corregimiento';
$result = $conn -> query($query);   

if ($result === false) {
    echo "Falló la consulta: " . $conn->error_list[0];
} else {
    // Aquí se maneja la consulta para mostrar los datos
    $datos = [];
    while ($fila = $result->fetch_assoc()) {
        $datos[] = [
            "codigo" => $fila["codigo_corregimiento"],
            "corregimiento" => $fila["nombre_corregimiento"]
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