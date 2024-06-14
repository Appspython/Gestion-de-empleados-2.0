document.getElementById('employee-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var id_empleado = document.getElementById('id_empleado').value;
    var puesto = document.getElementById('puesto').value;

    // Guardar los datos del empleado en un archivo TXT
    guardarEmpleado(nombre, apellido, id_empleado, puesto);

    // Limpiar el formulario
    e.target.reset();
});

function guardarEmpleado(nombre, apellido, id_empleado, puesto) {
    // Aquí deberías implementar la lógica para enviar los datos al servidor
    // y guardarlos en un archivo TXT. Esto podría hacerse con una petición
    // AJAX a un servidor que maneje la lógica del lado del servidor en Python.
}

function leerEmpleados() {
    // Aquí deberías implementar la lógica para leer los datos del archivo TXT
    // y mostrarlos en la página. Esto también requeriría una petición AJAX
    // para obtener los datos del servidor.
}
