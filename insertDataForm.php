<?php 

    /* 
        INSERT INTO generales VALUES(prefijo, tomo, asiento, cedula, nombre1, nombre2, apellido1, apellido2, estado_civil, 
        apellido_casada, usa_apellido_casada, provincia, distrito, corregimiento, comunidad, calle, casa, estado, 
        fecha_nacimiento, estatura, peso, condición_fisica, tipo_de_sangre, genero)
    */
    include('./Conexion.php');
    function insertData(){
        $conexion = new Conexion();
        $conn = $conexion->conectar();

        $query = 'INSERT INTO generales (
            prefijo,
            tomo,
            asiento,
            cedula,
            nombre1,
            nombre2,
            apellido1,
            apellido2,
            estado_civil,
            apellido_casada,
            usa_apellido_casada,
            provincia,
            distrito,
            corregimiento,
            comunidad,
            calle,
            casa,
            estado,
            fecha_nacimiento,
            estatura,
            peso,
            condición_fisica,
            tipo_de_sangre,
            genero,
            pais
        ) VALUES (
            "' . $_POST['prefijo'] . '",
            "' . $_POST['tomo'] . '",
            "' . $_POST['asiento'] . '",
            "' . $_POST['cedula'] . '",
            "' . $_POST['nombre1'] . '",
            "' . $_POST['nombre2'] . '",
            "' . $_POST['apellido1'] . '",
            "' . $_POST['apellido2'] . '",
            "' . $_POST['estado_civil'] . '",
            "' . $_POST['apellido_casada'] . '",
            "' . $_POST['usa_apellido_casada']. '",
            "' . $_POST['provincia'] . '",
            "' . $_POST['distrito'] . '",
            "' . $_POST['corregimiento'] .'",
            "' . $_POST['comunidad'] . '",
            "' . $_POST['calle'] . '",
            "' . $_POST['casa'] . '",
            "' . $_POST['estado'] . '",
            "' . $_POST['fecha_nacimiento'] . '",
            "' . $_POST['estatura'] . '",
            "' . $_POST['peso'] . '",
            "' . $_POST['c_medica'] . '",
            "' . $_POST['tipo_sangre'] . '",
            "' . $_POST['genero'] . '",
            "' . $_POST['pais']. '"
        )';

    $result = $conn->query($query);
    if ($result === false) {
        echo "Error al insertar datos: " . $conn->error_list[0];
    } else {
        echo "Datos Guardados Correctamente!";
    }

    $conexion->cerrar();
}

insertData();
?>
