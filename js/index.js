'use strict'

/* 
    @param htmlInput : HTML_ELEMENT
*/

/* Funcion que valida solamente existan números dentro del campo
    
*/
const onlyNumbers = (htmlInput) => {
    let inputValue = htmlInput.value;
    let sanitizedValue = inputValue.replace(/[^0-9]/g, '');//este deberia evitar que characteres sean introducidos
    if (inputValue !== sanitizedValue) {
        htmlInput.value = sanitizedValue;
    }
}

/* Funcion para validar que existan solamente caracteres y no números en el campo */
const onlyChar = (htmlInput) => {
    let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/u;
    if (!regex.test(htmlInput.value)) {
        htmlInput.value = "";
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

