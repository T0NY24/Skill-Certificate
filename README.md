
# 📝 **Formulario de Validación - validation.js** 🎯

Este es un archivo JavaScript que valida diferentes campos de un formulario como **Correo Electrónico**, **Teléfono**, **URL**, **Código Postal** y **Dirección IP**. Si algún campo es inválido, se mostrará un mensaje de error y el campo será limpiado. Si todo es correcto, se muestra una notificación de éxito.

---

## 🚀 **Características principales:**

- **Validación de campos en tiempo real** ⚡
- **Errores dinámicos** con animaciones llamativas 💥
- **Notificación de éxito** al finalizar correctamente ✅
- **Expresiones regulares** actualizadas para una validación eficiente 🧑‍💻

---

## 📋 **Campos validados:**

- **Correo Electrónico**: Validación de formato clásico: `ejemplo@dominio.com` 📧
- **Teléfono**: Validación de formato en 3 secciones: `123-456-7890` 📞
- **URL**: Debe incluir `http://` o `https://`. 🌐
- **Código Postal**: Solo 5 dígitos. (Ej. `12345`) 🏠
- **Dirección IP**: Debe ser una dirección IPv4 válida (Ej. `192.168.0.1`) 🌍

---

## ✨ **Cómo Funciona:**

1. Cuando el formulario es enviado, **previene el envío** si algún campo es inválido.
2. Si algún campo no pasa la validación, se muestra un **mensaje de error** en rojo junto con un efecto de **temblor** en el campo correspondiente.
3. Si todos los campos son válidos, se muestra una **notificación de éxito** con un mensaje bonito: `¡Formulario validado con éxito! 🎉`

---

## 🎨 **Estilos y Notificaciones**:

El código utiliza un estilo moderno para la validación:

- **Errores**: Los mensajes de error se muestran con un color rojo vibrante, y los campos inválidos tienen una animación de "temblor". ❌
- **Éxito**: Un mensaje verde con un fondo alegre para indicar que el formulario se validó correctamente. 🎉

---

## 💡 **Ejemplo de uso:**

```html
<form id="validationForm">
  <input type="text" id="email" placeholder="Correo electrónico">
  <input type="text" id="telefono" placeholder="Teléfono (123-456-7890)">
  <input type="text" id="url" placeholder="URL (http://example.com)">
  <input type="text" id="codigoPostal" placeholder="Código Postal (12345)">
  <input type="text" id="ip" placeholder="Dirección IP (192.168.0.1)">
  <button type="submit">Enviar</button>
</form>
```

---

## 🌈 **¿Qué puedes hacer con este archivo?**

- **Mejorar la experiencia del usuario**: ¡Ofrece un formulario interactivo y fácil de usar!
- **Personalizar las validaciones**: Cambia las expresiones regulares para adaptarlo a tus necesidades.
- **Diseñar con estilo**: Usa este script como parte de tu sitio web para una experiencia más amigable. 🌟

---

## 🛠️ **Requisitos:**

- Navegador moderno con soporte para JavaScript. 🌍
- Editor de código como **VS Code** para personalizar y editar el archivo. ✨

---

## 🤝 **Contribuciones:**

Si tienes ideas para mejorar este código, ¡haz un **fork** y contribuye! 🚀

---
