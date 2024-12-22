
document.querySelector('.contacto__formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario si hay errores

    // Seleccionar los campos del formulario
    const nombre = document.querySelector('input[placeholder="Nombre"]');
    const correo = document.querySelector('input[placeholder="Correo Electrónico"]');
    const mensaje = document.querySelector('textarea[placeholder="Mensaje"]');

    let valid = true;

    // Validar nombre
    if (nombre.value.trim() === '') {
        alert('El campo "Nombre" es obligatorio.');
        valid = false;
    }

    // Validar correo
    if (correo.value.trim() === '') {
        alert('El campo "Correo Electrónico" es obligatorio.');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
        alert('Por favor, introduce un correo válido.');
        valid = false;
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
        alert('El campo "Mensaje" es obligatorio.');
        valid = false;
    }

    // Si todo es válido, se puede enviar el formulario
    if (valid) {
        alert('Formulario enviado correctamente.');
        e.target.submit(); // Enviar el formulario
    }
});
