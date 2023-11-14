<?php 

/* 
    * Archivo para actualizar el registro seleccionado en la base de datos (cedula)
*/

    include('./Conexion.php');

    function updateGenerales(){
        $conexion = new Conexion();
        $conn = $conexion->conectar();

        $query = 'UPDATE generales SET
                 nombre1 = "'.$_POST['nombre1'].'",
                 nombre2 = "'.$_POST['nombre2'].'",
                 apellido1 = "'.$_POST['apellido1'].'",
                 apellido2 = "'.$_POST['apellido2'].'",
                 estado_civil = "'.$_POST['estado_civil'].'",
                 apellido_casada = "'.$_POST['apellido_casada'].'",
                 usa_apellido_casada = "'.$_POST['usa_apellido_casada'].'",
                 provincia = "'.$_POST['provincia'].'",
                 distrito = "'.$_POST['distrito'].'",
                 corregimiento = "'.$_POST['corregimiento'].'",
                 comunidad = "'.$_POST['comunidad'].'",
                 calle ="'.$_POST['calle'].'",
                 casa = "'.$_POST['casa'].'",
                 estado ="'.$_POST['estado'].'",
                 fecha_nacimiento = "'.$_POST['fecha_nacimiento'].'",
                 estatura = "'.$_POST['estatura'].'",
                 peso = "'.$_POST['peso'].'",
                 condición_fisica = "'.$_POST['c_medica'].'",
                 tipo_de_sangre = "'.$_POST['tipo_sangre'].'",
                 genero = "'.$_POST['genero'].'",
                 pais = "'.$_POST['pais'].'",
                 estado = "'.$_POST['estado'].'"
                 WHERE cedula = "'.$_POST['cedula'].'";';
                 
        $result = $conn->query($query);

        if ($result === false) {
            echo "Error al insertar datos: " . var_dump($conn->error_list[0]);
        } else {
            echo "Datos Actualizados Correctamente!";
        }
    
        $conexion->cerrar();
    }

    updateGenerales()
?>