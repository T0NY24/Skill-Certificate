// Archivo: validation.js

document.getElementById("validationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario si hay errores
  
    // Obtener los valores de los campos
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const url = document.getElementById("url");
    const codigoPostal = document.getElementById("codigoPostal");
    const ip = document.getElementById("ip");
  
    // Expresiones regulares actualizadas
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTelefono = /^\d{3}-\d{3}-\d{4}$/;
    const regexURL = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    const regexCodigoPostal = /^\d{5}$/;
    const regexIP = /^((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
  
    // Validar los campos
    let isValid = true;
  
    function showError(field, message) {
      // Agregar mensaje de error
      const notification = document.createElement("div");
      notification.className = "error-notification";
      notification.textContent = message;
      document.body.appendChild(notification);
  
      // Mostrar efecto de temblor
      field.classList.add("shake");
      setTimeout(() => field.classList.remove("shake"), 500);
  
      // Quitar notificación automáticamente
      setTimeout(() => {
        notification.remove();
      }, 3000);
  
      isValid = false;
    }
  
    if (!regexEmail.test(email.value)) {
      showError(email, "Correo electrónico inválido.");
      email.value = ""; // Borrar valor
    }
  
    if (!regexTelefono.test(telefono.value)) {
      showError(telefono, "Número de teléfono inválido. Use el formato 123-456-7890.");
      telefono.value = ""; // Borrar valor
    }
  
    if (!regexURL.test(url.value)) {
      showError(url, "URL inválida. Asegúrese de incluir 'http://' o 'https://'.");
      url.value = ""; // Borrar valor
    }
  
    if (!regexCodigoPostal.test(codigoPostal.value)) {
      showError(codigoPostal, "Código postal inválido. Debe contener 5 dígitos.");
      codigoPostal.value = ""; // Borrar valor
    }
  
    if (!regexIP.test(ip.value)) {
      showError(ip, "Dirección IP inválida. Use el formato IPv4 (e.g., 192.168.0.1).");
      ip.value = ""; // Borrar valor
    }
  
    if (isValid) {
      // Mostrar notificación de éxito
      const successMessage = document.createElement("div");
      successMessage.className = "success-notification";
      successMessage.textContent = "¡Formulario validado con éxito! 🎉";
      document.body.appendChild(successMessage);
  
      // Remover automáticamente después de 5 segundos
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });
  