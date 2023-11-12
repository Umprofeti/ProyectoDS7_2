'use strict'

/* 
    * Campos del formulario
*/
var selectPrefijo = document.getElementById("prefijo");
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


/*
 * Select Inputs 
 */
var selectPaises = document.getElementById("Pais");
var selectProvincia = document.getElementById("Provincia");
var selectDistrito = document.getElementById("Distrito");
var selectCorregimiento = document.getElementById("Corregimiento");
var scivil=document.getElementById("scivil");
var selectTSangre = document.getElementById("TipoSangre");
/* Radio Buttons */

var rbGeneroM = document.getElementById("generoM");
var rbGeneroF = document.getElementById("generoF");
var rbCasadaSi = document.getElementById("casadaSi");
var rbCasadaNo = document.getElementById("casadaNo");
/* 
    @param htmlInput : HTML_ELEMENT
*/
/*
    * sumbit BTN
*/
var btn_Submit = document.getElementById("btn_Submit");
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

const onlyNumbersAndChar = (htmlInput) => {
    htmlInput.value = htmlInput.value.replace(/[^A-Za-z0-9]+/g, '');
}
/*Funcion modificada para permitir espacios en los campos comunidad y calle*/ 
const onlyNumbersAndCharSpaces = (htmlInput) => {
    htmlInput.value = htmlInput.value.replace(/[^A-Za-z0-9\s]+/g, '');
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

//Si el campo apellido casada es "No" desabilita el campo de "Apellido de casada".
casadaNo.addEventListener('click', () => {
    apellidoCasada.disabled = true;
})
casadaSi.addEventListener('click', () => {
    apellidoCasada.disabled = false;
})

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
inputComunidad.addEventListener('input',()=>{
    onlyNumbersAndCharSpaces(inputComunidad);
})
inputCalle.addEventListener('input',()=>{
    onlyNumbersAndCharSpaces(inputCalle);
})
inputCasa.addEventListener('input',()=>{
    onlyNumbersAndChar(inputCasa);
})

/*
    * Función para el Llenado del select de países
*/

const llenarPaises = () => {
    $.ajax({
        type: "GET",
        url: "queryPaises.php",
                success: (resp) => {
                    let output = JSON.parse(resp)
                    output.map(({codigo, pais}) => {
                        selectPaises.innerHTML += `<option value="${codigo}">${pais}</option>`;
                    })
                }
    }) 
}

llenarPaises()

/*
 * Verificar si el país seleccionado es Panamá 
*/

const VerificarPais = (codigo) => {
    // Verifica si los campos ya son de tipo input
    const provinciaIsInput = selectProvincia.tagName.toLowerCase() === 'input';
    const corregimientoIsInput = selectCorregimiento.tagName.toLowerCase() === 'input';
    const distritoIsInput = selectDistrito.tagName.toLowerCase() === 'input';

    if (codigo == 507) {
        selectProvincia.disabled = false;
        $.ajax({
            type: "GET",
            url: "queryProvincias.php",
            success: (resp) => {
                let output = JSON.parse(resp);
                // Limpiar opciones existentes antes de agregar nuevas
                selectProvincia.innerHTML = '';
                output.map(({ codigo, provincia }) => {
                    selectProvincia.innerHTML += `<option value="${codigo}">${provincia}</option>`;
                });
            },
            error: (error) => {
                console.error("Error al obtener provincias:", error);
            }
        });

        // Restaura los campos a select si ya son de tipo input
        if (provinciaIsInput) {
            selectProvincia.outerHTML = '<select id="selectProvincia"></select>';
        }
        if (corregimientoIsInput) {
            selectCorregimiento.outerHTML = '<select id="selectCorregimiento"></select>';
        }
        if (distritoIsInput) {
            selectDistrito.outerHTML = '<select id="selectDistrito"></select>';
        }
    } else {
        // Para países que no son Panamá
        selectProvincia.disabled = true;
        selectProvincia.innerHTML = '';
        selectProvincia.outerHTML = '<input type="text" id="inputProvincia">';

        // Cambiar campos a input si ya son de tipo select
        if (!corregimientoIsInput) {
            selectCorregimiento.outerHTML = '<input type="text" id="inputCorregimiento">';
        }
        selectCorregimiento.disabled = true;
        selectCorregimiento.innerHTML = '';

        if (!distritoIsInput) {
            selectDistrito.outerHTML = '<input type="text" id="inputDistrito">';
        }
        selectDistrito.disabled = true;
        selectDistrito.innerHTML = '';
    }
};


const getDistrito = (codigo) => {
    let data = `codigo=${codigo}`
    selectDistrito.innerHTML = '';
    selectCorregimiento.innerHTML = '';
    $.ajax({
        type: "POST",
        url: "queryDistritos.php",
                data: data,
                success: (resp) => {
                    let output = JSON.parse(resp)
                    output.map(({codigo, distrito}) => {
                        selectDistrito.innerHTML += `<option value="${codigo}">${distrito}</option>`;
                    })
                }
    }) 
}

const getCorregimientos = (codigo) => {
    let data = `codigo=${codigo}`
    selectCorregimiento.innerHTML = '';
    $.ajax({
        type: "POST",
        url: "queryCorregimientos.php",
                data: data,
                success: (resp) => {
                    let output = JSON.parse(resp)
                    output.map(({codigo, corregimiento}) => {
                        selectCorregimiento.innerHTML += `<option value="${codigo}">${corregimiento}</option>`;
                    })
                }
    }) 
}

selectPaises.addEventListener('input', ()=> {
    VerificarPais(selectPaises.value)
})

selectProvincia.addEventListener('input', ()=> {
    getDistrito(selectProvincia.value)
})

selectDistrito.addEventListener('input', ()=> {
    getCorregimientos(selectDistrito.value)
})

const checkACasada = () => {
    if(casadaSi.checked){
        return '1'
    }
    if(casadaNo.checked){
        return '0'
    }
    return '0'
}
const checkGenero = () => {
    if(generoF.checked){
        return 'F'
    }
    if(generoM.checked){
        return 'M'
    }
}

const insertData = () => {
    let data = {
            prefijo: selectPrefijo.value,
            tomo: inputTomo.value,
            asiento: inputAsiento.value,
            cedula: `${selectPrefijo.value}-${inputTomo.value}-${inputAsiento.value}`,
            nombre1: inputNombre1.value,
            nombre2: inputNombre2.value,
            apellido1: inputApellido1.value,
            apellido2: inputApellido2.value,
            genero: checkGenero(),
            estado_civil: scivil.value,
            apellido_casada: inputACasada.value,
            usa_apellido_casada: checkACasada(),
            fecha_nacimiento: fechaNacimientoInput.value,
            peso: inputPeso.value,
            estatura: inputEstatura.value,
            tipo_sangre:  selectTSangre.value,
            c_medica: inputCMedica.value,
            provincia: selectProvincia.value,
            distrito: selectDistrito.value,
            corregimiento: selectCorregimiento.value,
            comunidad: inputComunidad.value,
            calle: inputCalle.value,
            casa: inputCasa.value,
            estado: 1    
        }
        $.ajax({
            type: "POST",
            url: "insertDataForm.php",
            data: data,
            success: (resp) => {
               console.log(resp)
            }
        })
}

const verifyPrimaryKey= () => {
    let result;
    let data = {
        cedula: `${selectPrefijo.value}-${inputTomo.value}-${inputAsiento.value}`
    }
    $.ajax({
        type: "POST",
        url: "queryCedula.php",
        data: data,
        success: (resp) => {
           let output = JSON.parse(resp);
           if(output){
                insertData();
           }else{
            console.log("Datos ya registrados")
           }
        }
    })
    return result;
}

btn_Submit.addEventListener('click', () => {
    const form = $('#form_sender');
    form.submit((e) => {
        e.preventDefault();
    });
    verifyPrimaryKey();
})