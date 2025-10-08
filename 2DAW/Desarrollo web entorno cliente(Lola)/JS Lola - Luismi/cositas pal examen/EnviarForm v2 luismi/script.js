const respuesta = document.getElementById("respuesta");
const botonSubmit = document.getElementById("submit");
const miFormulario = document.getElementById("miFormulario");

function validarFormulario(event) {
    event.preventDefault();

    const namesRegEx = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    const numberRegEx = /^[69]{1}([0-9]{8})$/;
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zAZenA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const nombre = event.target.nombre.value;
    const apellidos = event.target.apellidos.value;
    const edad = event.target.edad.value;
    const email = event.target.email.value;
    const telefono = event.target.telefono.value;



    const errores = {};

    // Validar cada campo
    if (!namesRegEx.test(nombre)) {
        errores.nombre = "El nombre es inválido. Debe ser solo letras.";
    }

    if (!namesRegEx.test(apellidos)) {
        errores.apellidos = "Los apellidos son inválidos. Deben ser solo letras.";
    }

    if (!emailRegEx.test(email)) {
        errores.email = "El email no es válido.";
    }

    if (!numberRegEx.test(telefono)) {
        errores.telefono = "El teléfono debe comenzar con 6 o 9 y tener 9 dígitos.";
    }

    // Si hay errores, mostrar mensajes de error
    if (Object.keys(errores).length > 0) {
        mostrarErrores(errores);
        return; // Evita el envío del formulario si hay errores
    }
    botonSubmit.textContent = "Enviado";
    const formularioEnviar = new FormData(event.target)
    formularioEnviar ? postData(formularioEnviar) : console.log("El formulario no ha sido bien capturado")
}

// Función para mostrar los mensajes de error
function mostrarErrores(errores) {
    // Limpiar los mensajes de error previos
    const mensajesError = document.querySelectorAll('.error');
    mensajesError.forEach(error => error.remove());

    // Mostrar errores
    for (const campo in errores) {
        const input = document.querySelector(`[name=${campo}]`);
        const mensajeError = document.createElement('span');
        mensajeError.classList.add('error');
        mensajeError.style.color = 'red';
        mensajeError.textContent = errores[campo];
        input.parentElement.appendChild(mensajeError);
    }
}



async function postData(formData) {
    try {
        console.log(formData);
        const response = await fetch("api.php", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.error) {
            console.error(data.error)
        }
        else{
        respuesta.innerHTML = `
        <h1>Respuesta: ${data.serverResponse}</h1>
        <p>Nombre: ${data.nombre}</p>
        <p>Apellidos: ${data.apellidos}</p>
        <p>Edad: ${data.edad}</p>
        <p>Email: ${data.email}</p>`;
        }
    } catch (error) {
        console.error(error.message);
    }
   
}

miFormulario.addEventListener("submit", validarFormulario)