console.log("hello world!")

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    var motivo = document.getElementById('motivo').value;
    var imagen = document.getElementById('imagen').value;

    if (nombre.trim() == '' || email.trim() == '' || telefono.trim() == '' || mensaje.trim() == '' || motivo.trim() == '' || imagen.trim() == '') {
        alert('Por favor completa todos los campos obligatorios.');
        return false;
    }

    return true;
}
