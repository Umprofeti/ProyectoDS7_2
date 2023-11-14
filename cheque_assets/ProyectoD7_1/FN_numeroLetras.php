<?php 
$CantString =  $_POST['cant'];
// Metodo para sacar la cadena de texto a partir de un número
function translate($n) {
    if (!is_numeric($n)) {
        return 'Valor no numérico';
    }

    $unidades = [
        0 => 'cero', 1 => 'uno', 2 => 'dos', 3 => 'tres', 4 => 'cuatro', 5 => 'cinco',
        6 => 'seis', 7 => 'siete', 8 => 'ocho', 9 => 'nueve'
    ];

    $diezNueve = [
        10 => 'diez', 11 => 'once', 12 => 'doce', 13 => 'trece', 14 => 'catorce', 15 => 'quince',
        16 => 'dieciséis', 17 => 'diecisiete', 18 => 'dieciocho', 19 => 'diecinueve'
    ];

    $veintiNueve = [
        20 => 'Veinte', 21 => 'Veintiuno', 22 => 'Veintidos', 23 => 'Veintitres',
        24 => 'Veinticuatro', 25 => 'Veinticinco', 26 => 'Veintiséis', 27 => 'Veintisiete',
        28 => 'Veintiocho', 29 => 'Veintinueve'
    ];
    

    $decenas = [
        2 => 'veinti', 3 => 'treinta', 4 => 'cuarenta', 5 => 'cincuenta',
        6 => 'sesenta', 7 => 'setenta', 8 => 'ochenta', 9 => 'noventa'
    ];

    $centenas = [
        1 => 'ciento', 2 => 'doscientos', 3 => 'trescientos', 4 => 'cuatrocientos', 5 => 'quinientos',
        6 => 'seiscientos', 7 => 'setecientos', 8 => 'ochocientos', 9 => 'novecientos'
    ];
    
    $cientoUnMil = [
        101 => 'Ciento un', 201 => 'Doscientos Un',
        301 => 'Trescientos Un', 401 => 'Cuatrocientos Un',
        501 => 'Quinientos Un', 601 => 'Seiscientos Un',
        701 => 'Setecientos Un', 801 => 'Ochocientos Un',
        901 => 'Novecientos Un'
    ];
    
    if ($n < 0) {
        return 'Número negativo no soportado';
    }

    if ($n < 10) {
        return $unidades[$n];
    } elseif ($n < 20) {
        return $diezNueve[$n];
    }elseif($n >= 20 && $n < 30){
        return $veintiNueve[$n];
    } 
    elseif ($n < 100) {
        $decena = intval($n / 10);
        $unidad = $n % 10;
        $resultado = $decenas[$decena];
        if ($unidad > 0) {
            $resultado .= ' y ' . $unidades[$unidad];
        }
        return $resultado;
    } elseif ($n < 1000) {
        if ($n == 100) {
            return 'cien';
        } else {
            $centena = intval($n / 100);
            $resto = $n % 100;
            $resultado = $centenas[$centena];
            if ($resto > 0) {
                $resultado .= ' ' . translate($resto);
            }
            return $resultado;
        }
    } elseif ($n < 1000000) {
        $miles = intval($n / 1000);
        $resto = $n % 1000;
        $resultado = '';
        if ($miles == 1) {
            $resultado .= 'mil';
        } elseif ($miles > 1) {
            if($miles == 101 || $miles == 201 || $miles == 301 || $miles == 401 || $miles == 501 || $miles == 601 || $miles == 701 || $miles == 801 || $miles == 901){
                $resultado .= $cientoUnMil[$miles] . ' mil'; 
            }else{
                $resultado .= translate($miles) . ' mil';
            }
        }
        if ($resto > 0) {
            $resultado .= ' ' . translate($resto);
        }
        return $resultado;
    } else {
        $resultado = '';
        $millones = [
            1 => 'millón', 1000000 => 'millones'
        ];
        $Nmillones = intval($n / 1000000);
        $resto = $n % 1000000;
        if($Nmillones == 1){
           $resultado .= 'Un Millón ';
        }else{
           $resultado .= translate($Nmillones). ' Millones ';
        }
        if ($resto > 0) {
            $resultado .= ' ' . translate($resto);
        }
        return $resultado;
    }
} 

if($CantString != ''){
    if(is_numeric($CantString)){
        $result = translate(intval($CantString));

        $decimal = (intval($CantString) - $CantString);
        $decimal = round($decimal,2);
        
        $decimal = abs($decimal * 100);
        echo ucfirst($result) . ' con ' . sprintf("%02d", $decimal) . '/100';
    }  
}
?>