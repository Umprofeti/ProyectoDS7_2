$("form").on("submit", (e) => {
  e.preventDefault();
});
const formData = new FormData();
formData.append("NCheque", $("#NCheque").val());
formData.append("Fecha", $("#Fecha").val());
formData.append("Nombre", $("#Nombre").val());
formData.append("Cant", $("#Cant").val());
formData.append("CantString", $("#CantString").val());
formData.append("DGasto", $("#DGasto").val());

const sendForm = () => {
  $.ajax({
    type: "POST",
    url: "validacion.php",
    data: {
      NCheque: $("#NCheque").val(),
      Nombre: $("#Nombre").val(),
      Fecha: $("#Fecha").val(),
      Cant: $("#Cant").val(),
      CantString: $("#CantString").val(),
      DGasto: $("#DGasto").val(),
    },
    success: (resp) => {
      resp = JSON.parse(resp);
      if (resp.code === 40) {
        // Aquí colocar los estilos necesarios para que el JS modifique la caja
        msgPHP.classList.add("error-msg");
        msgPHP.innerHTML = `<i class="fas fa-exclamation-circle "></i>${resp.msg}`;
      }
      if (resp.code === 200) {
        // Aquí colocar los estilos necesarios para que el JS modifique la caja
        if (msgPHP.classList.contains("error-msg")) {
          msgPHP.classList.remove("error-msg");
          msgPHP.classList.add("success-msg");
        }
        msgPHP.classList.add("success-msg");
        msgPHP.innerHTML = `<i class="fa-solid fa-check"></i>${resp.msg}`;
      }
    },
  });
};
