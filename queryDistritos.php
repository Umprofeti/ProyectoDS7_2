<?php 
include('./Conexion.php');

function SelectPaises(){
$codigo = $_POST['codigo'];
$conexion = new Conexion("localhost", "root", "", "ds7");
$conn = $conexion->conectar();

$query = 'SELECT * FROM distrito WHERE codigo_provincia = '.$codigo.'';
$result = $conn -> query($query);   

if ($result === false) {
    echo "Falló la consulta: " . $conn->error_list[0];
} else {
    // Aquí se maneja la consulta para mostrar los datos
    $datos = [];
    while ($fila = $result->fetch_assoc()) {
        $datos[] = [
            "codigo" => $fila["codigo_distrito"],
            "distrito" => $fila["nombre_distrito"]
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