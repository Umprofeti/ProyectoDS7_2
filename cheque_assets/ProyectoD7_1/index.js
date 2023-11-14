var NumeroCheque = document.getElementById("NCheque");
var CantidadCheque = document.getElementById("Cant");
var MensajeUsuario =  document.getElementById("msg");
var cantidadString = document.getElementById("CantString");
var cantidadInt = document.getElementById("Cant");
var formCheque = document.getElementById("formCheque");
var msgPHP = document.getElementById("msgPHP");
var Nombre = document.getElementById("Nombre");
var DGasto = document.getElementById("DGasto");
const datepicker = document.querySelector("#Fecha");
const validarCampoNumero = (inputValue) => {
    let RegNum = new RegExp('([0-9)]+)');
    let result = RegNum.test(inputValue)
    if(!result){
        MensajeUsuario.classList.add("MensajeError");
        MensajeUsuario.innerHTML = `El dato colocado no cumple los estandares: ${inputValue}`;
    }else{
        MensajeUsuario.classList.remove("MensajeError");
        MensajeUsuario.innerHTML = ``;
    }
    
}


NumeroCheque.addEventListener('input', ()=> {
    let input = NumeroCheque.value
    let regex = /[0-9+]+/u;
    if(!regex.test(input)){
        NumeroCheque.value = "";
    }
})

Nombre.addEventListener('input', () => {
    let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/u;
    if (!regex.test(Nombre.value)) {
        Nombre.value = "";
    }

});

CantidadCheque.addEventListener('input', () => {
    let input = $('input[name=Cant]').val()
    let data = `cant=${input}`
        $.ajax({
            type: "POST",
            url: "FN_numeroLetras.php",
                        data: data,
                        success: (resp) => {
                            cantidadString.value =  resp
                        }
        })   
})

cantidadInt.addEventListener('input', () => {
    let inputValue = cantidadInt.value;
    let sanitizedValue = inputValue.replace(/[^0-9.]/, '');//este deberia evitar que characteres sean introducidos
    /* if (inputValue != sanitizedValue) {
        cantidadInt.value = sanitizedValue;
    } */

    if(isNaN(inputValue)){
        cantidadInt.value = sanitizedValue;
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
    cantidadInt.value = parts.join('.');
})

NumeroCheque.addEventListener('input', () => {
    let inputValue = NumeroCheque.value;
    let sanitizedValue = inputValue.replace(/[^0-9]/g, '');//este deberia evitar que characteres sean introducidos
    if (inputValue !== sanitizedValue) {
        NumeroCheque.value = sanitizedValue;
    }
})

DGasto.addEventListener('focusout', ()=> {
    sendForm();
})



datepicker.addEventListener("focusout", function() {
    let data = $("#Fecha").val()
    $.ajax({
        type: "POST",
        url: "ValidacionFecha.php",
                    data: {
                        "Fecha": data 
                    },
                    success: (resp) => {
                        resp = JSON.parse(resp);
                        if(resp.code === 41){
                            datepicker.value = '';
                            // Aquí colocar los estilos necesarios para que el JS modifique la caja
                            if(msgPHP.classList.contains("success-msg")){
                                msgPHP.classList.remove("success-msg");
                            }
                            msgPHP.classList.add("error-msg")
                            msgPHP.innerHTML = `<i class="fas fa-exclamation-circle "></i>${resp.msg}`
                            
                        }
                        if(resp.code === 200){
                            msgPHP.classList.remove("error-msg");
                            msgPHP.innerHTML = '';
                        }
                    }
    })  
  });
  
  
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
