'use strict'

/* 
    * Campos del formulario
*/

var inputTomo =  document.getElementById("tomo");
var inputAsiento = document.getElementById("asiento");
var inputNombre1 = document.getElementById("nombre1");
var inputNombre2 = document.getElementById("nombre2");
var inputApellido1 = document.getElementById("apellido1");
var inputApellido2 = document.getElementById("apellido2");
var inputACasada = document.getElementById("apellidoCasada");
var inputPeso = document.getElementById("peso");
var inputEstatura = document.getElementById("estatura");
var inputCMedica = document.getElementById("CMedica");
var inputComunidad = document.getElementById("Comunidad");
var inputCalle = document.getElementById("Calle");
var inputCasa = document.getElementById("Casa"); 

/* Radio Buttons */

var rbGeneroM = document.getElementById("generoM");
var rbGeneroF = document.getElementById("generoF");
var rbCasadaSi = document.getElementById("casadaSi");
var rbCasadaNo = document.getElementById("casadaNo");
/* 
    @param htmlInput : HTML_ELEMENT
*/

/*
 Funcion que valida solamente existan números dentro del campo
    
*/
const onlyNumbers = (htmlInput) => {
    let input = htmlInput.value
    let regex = /[0-9+]+/u;
    if(!regex.test(input)){
        htmlInput.value = "";
    }
}

/* Funcion para validar que existan solamente caracteres y no números en el campo */
const onlyChar = (htmlInput) => {
    let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/u;
    if (!regex.test(htmlInput.value)) {
        // Ajusta la funcion de modo que si el valor no coincide con la expresión regular, elimina los caracteres no válidos pero no limpia el campo
        htmlInput.value = htmlInput.value.replace(/[^A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+/ug, '');;
    }
}

const onlyNumbersAndTwoDecimal = (htmlInput) => {
    let inputValue = htmlInput.value;
    let sanitizedValue = inputValue.replace(/[^0-9.]/, '');//este deberia evitar que characteres sean introducidos

    if(isNaN(inputValue)){
        htmlInput.value = sanitizedValue;
    }
    // Divide el valor en dos partes: parte antes del punto y parte después del punto
    let parts = sanitizedValue.split('.');
    

    // Si hay más de una parte (es decir, hay un punto decimal), formatea la parte después del punto a dos caracteres
    if (parts.length > 1) {
        parts[1] = parts[1].slice(0, 2); // Limita la parte después del punto a dos caracteres
        if(parts[2] == ''){
            parts.pop();
        }
    }
    // Vuelve a unir las partes y establece el valor formateado en el campo de entrada
    htmlInput.value = parts.join('.');
}

const apellidoCasada = document.getElementById('apellidoCasada');
const generoF = document.getElementById('generoF');
const generoM = document.getElementById('generoM');
const casadaSi = document.getElementById('casadaSi');
const casadaNo = document.getElementById('casadaNo');

// Deshabilita el campo "Apellido de Casada" y los radio buttons por defecto
apellidoCasada.disabled = true;
casadaSi.disabled = true;
casadaNo.disabled = true;

// Agrega eventos de cambio a los radio buttons de género
generoF.addEventListener('change', function() {
    if (generoF.checked) {
        // Si el género es "F", habilita el campo "Apellido de Casada" y los radio buttons
        apellidoCasada.disabled = false;
        casadaSi.disabled = false;
        casadaNo.disabled = false;
    } else {
        // De lo contrario, deshabilita el campo "Apellido de Casada" y los radio buttons
        apellidoCasada.disabled = true;
        casadaSi.disabled = true;
        casadaNo.disabled = true;
        apellidoCasada.value = "";
    }
});

generoM.addEventListener('change', function() {
    if (generoM.checked) {
        // Si el género es "M", deshabilita el campo "Apellido de Casada", los radio buttons y limpia la seleccion
        apellidoCasada.disabled = true;
        casadaSi.disabled = true;
        casadaNo.disabled = true;
        apellidoCasada.value = "";
        casadaSi.checked = false;
        casadaNo.checked = false;
    }
});

const fechaNacimientoInput = document.getElementById('fechaNacimiento');

fechaNacimientoInput.addEventListener('change', function () {
    const selectedDate = new Date(fechaNacimientoInput.value);

    if (isNaN(selectedDate.getTime())) {
        // La fecha ingresada no es válida
        alert('La fecha de nacimiento ingresada no es válida. Por favor, ingrese una fecha válida.');
        fechaNacimientoInput.value = ''; // Limpia el campo
    }
});

/* 
    * Validacion de los campos
*/

inputTomo.addEventListener('input', () => {
    onlyNumbers(inputTomo)
})
inputAsiento.addEventListener('input', ()=> {
    onlyNumbers(inputAsiento)
})

inputNombre1.addEventListener('input', ()=> {
    onlyChar(inputNombre1);
})

inputNombre2.addEventListener('input', ()=> {
    onlyChar(inputNombre2);
})

inputApellido1.addEventListener('input', ()=> {
    onlyChar(inputApellido1);
})

inputApellido2.addEventListener('input', ()=> {
    onlyChar(inputApellido2);
})
apellidoCasada.addEventListener('input', ()=> {
    onlyChar(apellidoCasada);
})
inputCMedica.addEventListener('input', ()=> {
    onlyChar(inputCMedica);
})