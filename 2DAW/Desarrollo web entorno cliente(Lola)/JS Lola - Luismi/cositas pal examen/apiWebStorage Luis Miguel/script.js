const vehicleForm = document.getElementById("vehicleForm");
vehicleForm.addEventListener("submit", guardarDatos);

function guardarDatos(e) {
    e.preventDefault();
    
    const vehiculo = {
        marca: document.getElementById('marca').value.trim(),
        modelo: document.getElementById('modelo').value.trim(),
        bastidor: document.getElementById('bastidor').value.trim(),
        cilindrada: document.getElementById('cilindrada').value,
        puertas: document.getElementById('puertas').value,
        color: document.getElementById('color').value,
        propietario: {
            nombre: document.getElementById('nombre').value.trim(),
            apellidos: document.getElementById('apellidos').value.trim(),
            direccion: document.getElementById('direccion').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            email: document.getElementById('email').value.trim()
        }
    };

    sessionStorage.setItem('datosVehiculo', JSON.stringify(vehiculo));
    mostrarDatos();
    vehicleForm.reset();
}

function mostrarDatos() {
    const datosGuardados = document.getElementById('datosGuardados');
    const datos = sessionStorage.getItem('datosVehiculo');

    if(datos) {
        const vehiculo = JSON.parse(datos);
        let html = `
            <h2>Datos Registrados</h2>
            <div class="summary-grid">
                <div class="vehicle-summary">
                    <h3>Vehículo</h3>
                    <p><strong>Marca:</strong> ${vehiculo.marca}</p>
                    <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
                    <p><strong>Bastidor:</strong> ${vehiculo.bastidor}</p>
                    <p><strong>Cilindrada:</strong> ${vehiculo.cilindrada} cc</p>
                    <p><strong>Puertas:</strong> ${vehiculo.puertas}</p>
                    <p><strong>Color:</strong> <span style="background:${vehiculo.color}; display: inline-block; width: 20px; height: 20px;"></span></p>
                </div>
                <div class="owner-summary">
                    <h3>Propietario</h3>
                    <p><strong>Nombre:</strong> ${vehiculo.propietario.nombre} ${vehiculo.propietario.apellidos}</p>
                    <p><strong>Dirección:</strong> ${vehiculo.propietario.direccion}</p>
                    <p><strong>Teléfono:</strong> ${vehiculo.propietario.telefono}</p>
                    <p><strong>Email:</strong> ${vehiculo.propietario.email}</p>
                </div>
            </div>
        `;
        datosGuardados.innerHTML = html;
    } else {
        datosGuardados.innerHTML = '<p>No hay registros almacenados</p>';
    }
}

window.onload = mostrarDatos;