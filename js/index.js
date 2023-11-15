'use strict'

/* 
    * Campos del formulario
*/
var selectPrefijo = document.getElementById("prefijo");
var inputTomo = document.getElementById("tomo");
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
var scivil = document.getElementById("scivil");
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
var buttonsSenders = document.querySelectorAll(".buttonSender");
var wrapperCedula = document.getElementById("wrapperCedula");
/*
 Funcion que valida solamente existan números dentro del campo
    
*/
const onlyNumbers = (htmlInput) => {
    let input = htmlInput.value
    let regex = /[0-9+]+/u;
    if (!regex.test(input)) {
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

    if (isNaN(inputValue)) {
        htmlInput.value = sanitizedValue;
    }
    // Divide el valor en dos partes: parte antes del punto y parte después del punto
    let parts = sanitizedValue.split('.');


    // Si hay más de una parte (es decir, hay un punto decimal), formatea la parte después del punto a dos caracteres
    if (parts.length > 1) {
        parts[1] = parts[1].slice(0, 2); // Limita la parte después del punto a dos caracteres
        if (parts[2] == '') {
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
generoF.addEventListener('change', function () {
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

generoM.addEventListener('change', function () {
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
inputAsiento.addEventListener('input', () => {
    onlyNumbers(inputAsiento)
})

inputNombre1.addEventListener('input', () => {
    onlyChar(inputNombre1);
})

inputNombre2.addEventListener('input', () => {
    onlyChar(inputNombre2);
})

inputApellido1.addEventListener('input', () => {
    onlyChar(inputApellido1);
})

inputApellido2.addEventListener('input', () => {
    onlyChar(inputApellido2);
})
apellidoCasada.addEventListener('input', () => {
    onlyChar(apellidoCasada);
})
inputCMedica.addEventListener('input', () => {
    onlyChar(inputCMedica);
})
inputComunidad.addEventListener('input', () => {
    onlyNumbersAndCharSpaces(inputComunidad);
})
inputCalle.addEventListener('input', () => {
    onlyNumbersAndCharSpaces(inputCalle);
})
inputCasa.addEventListener('input', () => {
    onlyNumbersAndChar(inputCasa);
})

/*
    * Función para el Llenado del select de países
*/

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
            output.map(({ codigo, distrito }) => {
                codigo = Number(codigo)
                codigo == 1302
                    ? selectDistrito.innerHTML += `<option selected="selected" value="${codigo}">${distrito}</option>`
                    : selectDistrito.innerHTML += `<option value="${codigo}">${distrito}</option>`
                    ;
                getCorregimientos(selectDistrito.value)
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
            selectCorregimiento.innerHTML = '';
            output.map(({ codigo, corregimiento }) => {
                codigo = Number(codigo)
                if (codigo === 130208) {
                    selectCorregimiento.innerHTML += `<option selected="selected" value="${codigo}">${corregimiento}</option>`
                } else {
                    selectCorregimiento.innerHTML += `<option value="${codigo}">${corregimiento}</option>`
                }
            })
        }
    })
}

/*
 * Verificar si el país seleccionado es Panamá 
*/

const VerificarPais = (codigo) => {
    if (codigo == 507) {
        $.ajax({
            type: "GET",
            url: "queryProvincias.php",
            success: (resp) => {
                let output = JSON.parse(resp)
                output.map(({ codigo, provincia }) => {
                    codigo = Number(codigo)

                    if (codigo === 13) {
                        selectProvincia.innerHTML += `<option selected="selected" value="${codigo}">${provincia}</option>`
                        getDistrito(selectProvincia.value)
                    } else {
                        selectProvincia.innerHTML += `<option value="${codigo}">${provincia}</option>`;
                    }
                })
            }
        })

        selectProvincia.disabled = false;
        selectDistrito.disabled = false;
        selectCorregimiento.disabled = false;
    } else {
        selectProvincia.disabled = true;
        selectDistrito.disabled = true;
        selectCorregimiento.disabled = true;
    }
}

/*
    * Funcion para obtener la data de los países en la db
*/
const llenarPaises = () => {
    $.ajax({
        type: "GET",
        url: "queryPaises.php",
        success: (resp) => {
            let output = JSON.parse(resp)
            output.map(({ codigo, pais }) => {
                if (codigo == 507) {
                    selectPaises.innerHTML += `<option selected="selected" value="${codigo}" >${pais}</option>`
                    VerificarPais(selectPaises.value)


                } else {
                    selectPaises.innerHTML += `<option value="${codigo}" >${pais}</option>`
                }
            })
        }
    })
}

llenarPaises()
$('#form_sender').submit((e) => {
    return false;
});
selectPaises.addEventListener('input', () => {
    VerificarPais(selectPaises.value)
    selectProvincia.innerHTML = '';
    selectDistrito.innerHTML = '';
    selectCorregimiento.innerHTML = '';
})

selectProvincia.addEventListener('input', () => {
    getDistrito(selectProvincia.value)
})

selectDistrito.addEventListener('input', () => {
    getCorregimientos(selectDistrito.value)
})

const checkACasada = () => {
    if (casadaSi.checked) {
        return '1'
    }
    if (casadaNo.checked) {
        return '0'
    }
    return '0'
}
const checkGenero = () => {
    if (generoF.checked) {
        return 'F'
    }
    if (generoM.checked) {
        return 'M'
    }
    if (!generoF.checked && !generoM.checked){
        generoM.checked = true
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
        tipo_sangre: selectTSangre.value,
        c_medica: inputCMedica.value,
        provincia: selectProvincia.value,
        distrito: selectDistrito.value,
        corregimiento: selectCorregimiento.value,
        comunidad: inputComunidad.value,
        calle: inputCalle.value,
        casa: inputCasa.value,
        estado: 1,
        pais: selectPaises.value
    }
    $.ajax({
        type: "POST",
        url: "insertDataForm.php",
        data: data,
        success: (resp) => {
            console.log("Respuesta de insertDataForm.php:", resp);
            mostrarPopup(resp);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error("Error en la solicitud AJAX (insertDataForm.php):", textStatus, errorThrown);
            mostrarPopup("Error al insertar datos");
        },
    });
};

const mostrarPopup = (mensaje) => {
    Swal.fire({
        icon: 'info', // Puedes cambiarlo según el tipo de mensaje que desees mostrar 'warning', 'success', 'error', etc.
        title: 'Mensaje',
        text: mensaje,
        confirmButtonText: 'Aceptar'
    });
};

const verifyPrimaryKey = () => {
    let cedula = `${selectPrefijo.value}-${inputTomo.value}-${inputAsiento.value}`;

    // Validar campos requeridos
    if (!cedula) {
        mostrarPopup('Por favor, completa todos los campos.');
        return;
    }

    let data = {
        cedula: cedula
    };

    $.ajax({
        type: 'POST',
        url: 'queryCedula.php',
        data: data,
        success: (resp) => {
            let output = JSON.parse(resp);
            if (output) {
                insertData();
            } else {
                mostrarPopup('Datos ya registrados');
            }
        },
        error: (error) => {
            console.error('Error en la solicitud AJAX:', error);
        }
    });
};


/* 
    * Funcion para llenar los datos de los inputs luego de recibir la data
    @Param data:JSON
*/
const fillData = (data) => {
    if (data.genero == 'M') {
        generoM.checked = true
        casadaNo.disabled = true;
        casadaSi.disabled = true;
    }
    if (data.genero == 'F') {
        generoF.checked = true
        casadaNo.disabled = false;
        casadaSi.disabled = false;
        if (data.usa_apellido_casada == 0) {
            casadaNo.checked = true
        }
        if (data.usa_apellido_casada == 1) {
            casadaSi.checked = true;
        }
    }
    inputNombre1.value = data.nombre1
    inputNombre2.value = data.nombre2
    inputApellido1.value = data.apellido1
    inputApellido2.value = data.apellido2
    inputACasada.value = data.apellido_casada
    fechaNacimientoInput.value = data.fecha_nacimiento
    inputPeso.value = data.peso
    inputEstatura.value = data.estatura
    inputCMedica.value = data.condición_fisica
    selectProvincia.value = data.provincia
    selectDistrito.value = data.distrito
    selectCorregimiento.value = data.corregimiento
    selectPaises.value = data.pais
    inputComunidad.value = data.comunidad
    inputCalle.value = data.calle
    inputCasa.value = data.casa
    scivil.value = data.estado_civil
    selectTSangre.value = data.tipo_de_sangre

}
/*  
    * Funcion que hace la consulta a la base de datos para extraer la data
*/
const getGenerales = () => {
    let data = {
        cedula: `${selectPrefijo.value}-${inputTomo.value}-${inputAsiento.value}`
    }
    $.ajax({
        type: "POST",
        url: "queryDataGenerales.php",
        data: data,
        success: (resp) => {
            let output = JSON.parse(resp);
            if(output[0] == undefined){
                mostrarPopup("No se han encontrados datos del usuario, porfavor registrelo")
            }else{
                fillData(output[0])
            }
        }
    })
}
/* 
    * Funcion para deshabilitar y habilitar todos los campos exceptos los de la cedula
    @Param state: Boolean
*/

const stateInputs = (state) => {
    selectPrefijo.disabled = state;
    inputTomo.readOnly = state;
    inputAsiento.readOnly = state;
}

/*  
* Funcion para crear el botón dependiendo del stado del botón
*/

const createButton = (state) => {
    let btn = document.getElementById("searchBtn")
    if(btn == null && state == 1){
        const button = document.createElement("button");
        button.classList.add("buttonSender")
        button.id = "searchBtn"
        button.textContent = "Buscar";
        button.type = "submit";
        if (state == 1) {
            button.addEventListener("click", () => {
                const form = $('#form_sender');
                form.submit((e) => {
                    e.preventDefault();
                });
                getGenerales();
                stateInputs(true);
            })
            wrapperCedula.appendChild(button);
        }
    }
    if(state == 0 && btn != null){
        wrapperCedula.removeChild(btn);
    }
}

const disableRequiredInput = (state) => {
    inputNombre1.required = state;
    inputApellido1.required = state;
    fechaNacimientoInput.required = state;
    inputEstatura.required = state;
    inputPeso.required = state;
}


/* 
    * Funcion para hacer el update a la tabla generales con la info que el usuario nueva
*/

const updateGenerales = () => {
    let data = {
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
        tipo_sangre: selectTSangre.value,
        c_medica: inputCMedica.value,
        provincia: selectProvincia.value,
        distrito: selectDistrito.value,
        corregimiento: selectCorregimiento.value,
        comunidad: inputComunidad.value,
        calle: inputCalle.value,
        casa: inputCasa.value,
        estado: 1,
        pais: selectPaises.value
    }
    $.ajax({
        type: "POST",
        url: "updateGenerales.php",
        data: data,
        success: (resp) => {
            console.log("Respuesta de updateGenerales.php:", resp);
            mostrarPopup(resp);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error("Error en la solicitud AJAX (insertDataForm.php):", textStatus, errorThrown);
            mostrarPopup("Error al actualizar datos");
        },
    });
}

/* 
    * Funcion para ocultar o mostrar el formulario de acuerdo al botón seleccionado
*/

const showForm = (state) => {
    let form = document.getElementById("form_sender")
    const mainCheque = document.getElementById("add_form");
    if(state == 2){
        form.style.display = 'none';
        /* Aquí se agrega el nuevo form */

        let form_cheque = document.getElementById("form_cheque");
        if(form_cheque == null){
            const createForm = document.createElement("iframe")
            createForm.id = "form_cheque"
            createForm.src = "./cheque_assets/ProyectoD7_1/cheque_body.html"
            createForm.title = "Formulario Cheque"
            createForm.width = "900px"
            createForm.height = "650px"
            createForm.style.border = "none"
            mainCheque.appendChild(createForm)
        }
    }
    if(state == 0 || state == 1 || state == 3){
        let form_cheque = document.getElementById("form_cheque");
        if(form_cheque != null){
            mainCheque.removeChild(form_cheque)
        }
        /* Se vuelve a mostrar el form */
        form.style.display = 'block';
    }
}

/* 
    * Funcion para verificar los campos del formulario estén llenos, los requeridos por la base de datos
*/

    const verifyInputs = () => {
        const form = document.getElementById("form_sender");
        if(form[0].checkValidity() && form[1].checkValidity() && form[2].checkValidity()){
            if(inputNombre1.value != "" && inputApellido1 != "" && fechaNacimientoInput.value != "" && inputPeso != "" && inputEstatura != "" && inputComunidad != "" && inputCalle != "" && inputCasa != ""){
                return true
            }
        }else{
            return false
        }
    }

/* 
* Funcion para establecer un estado en los botones
@Param state: int
*/

const eventCreate = () => {
    if (verifyInputs()) {
        verifyPrimaryKey();
    } else {
        mostrarPopup('Por favor, completa todos los campos.');
    }
}
const eventUpdate = () => {
    if(verifyInputs()){
        updateGenerales()
    }else{
        mostrarPopup('Por favor, completa todos los campos.');
    }
}
const handleBtnState = (state) => {
    let hState = state;
    if(hState == 3){
        showForm(state)
        let form = document.getElementById("form_sender")
        form.style.display = 'none';
    }
    if(hState == 2){
        showForm(state)
    }
    if (hState == 1) {
        showForm(state)
        disableRequiredInput(false)
        createButton(state);
        btn_Submit.addEventListener('click', eventUpdate)
        btn_Submit.removeEventListener('click', eventCreate);
    }
    if (hState == 0) {
        showForm(state)
        disableRequiredInput(false);
        stateInputs(false);
        createButton(state);
        btn_Submit.addEventListener('click', eventCreate);
        btn_Submit.removeEventListener('click', eventUpdate);
    }
    return hState
}

buttonsSenders.forEach((item, index) => {
    item.addEventListener('click', () => {
       let data =  handleBtnState(index)
       console.log(data)
    })
})
handleBtnState(0)