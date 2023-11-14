<?php 

    include("../../Conexion.php");

    $NCheque = $_POST['NCheque'];
    $Nombre = $_POST["Nombre"];
    $Cant = $_POST["Cant"];
    $DGasto = $_POST["DGasto"];
    $Fecha = $_POST["Fecha"];

    $Error = [
        2 => 'Formato de Fecha invalida!!'
    ];
    /*var_dump($_POST);*/

    /*Funcion para enviar la data del form*/

    function sendDataCheque(){
        $conexion = new Conexion();
        $conn = $conexion->conectar();
        $NCheque = $_POST['NCheque'];
        $Nombre = $_POST["Nombre"];
        $Cant = $_POST["Cant"];
        $DGasto = $_POST["DGasto"];
        $Fecha = $_POST["Fecha"];
    
        $query = 'INSERT INTO cheque (num_cheque, fecha, beneficiario, monto, observaciones) 
                  VALUES("'.$NCheque.'", "'.$Fecha .'", "'.$Nombre.'", "'.$Cant.'", "'.$DGasto.'")';

        $result = $conn->query($query);
        if ($result === false) {
            return "Error al insertar datos: " . var_dump($conn->error_list[0]);
        } else {
            return "Cheque Realizado";
        }
    
        $conexion->cerrar();
    }


    $jsonObj =  New stdClass();
    If($NCheque == '' || $Nombre == '' || $Cant == '' || $DGasto == ''){
        
        $jsonObj ->code = 40;
        $jsonObj ->msg = 'Por favor ingrese todos los datos en los campos correspondientes!';
        $jsonObj = json_encode($jsonObj);
        echo($jsonObj);
    }elseif ($Fecha == '') {
        $jsonObj ->code = 41;
        $jsonObj ->msg = 'Fecha invalida!';
        $jsonObj = json_encode($jsonObj);
        echo($jsonObj);
    }else{
        $resp = sendDataCheque();
        $jsonObj ->code = 200;
        $jsonObj ->msg = $resp;
        $jsonObj = json_encode($jsonObj);
        echo($jsonObj);
    }
?>