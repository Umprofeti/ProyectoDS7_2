<?php
$Fecha = $_POST['Fecha'];
$jsonObj =  New stdClass();

if($Fecha == ''){
        $jsonObj ->code = 41;
        $jsonObj ->msg = 'Fecha invalida!';
        $jsonObj = json_encode($jsonObj);
        echo($jsonObj);
}else{
        $jsonObj ->code = 200;
        $jsonObj ->msg = '';
        $jsonObj = json_encode($jsonObj);
        echo($jsonObj);     
}
?>
