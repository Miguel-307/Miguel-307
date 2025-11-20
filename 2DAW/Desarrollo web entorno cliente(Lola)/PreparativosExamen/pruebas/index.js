const invitados = [];

// 1. Referencias al DOM
const inputNombre = document.getElementById("guestInput");
const botonAdd = document.getElementById("addBtn");
const listaUl = document.getElementById("guestList");
const contadorSpan = document.getElementById("totalCount");

// 2. Evento del botón Añadir
botonAdd.addEventListener("click", AñadirA);

// --- LÓGICA ---

function AñadirA() {
    // Paso A: Leer lo que ha escrito el usuario
    const nombre = inputNombre.value.trim(); // .trim() quita espacios sobrantes

    // Paso B: Validaciones
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return; // Stop
    }

    if (invitados.includes(nombre)) {
        alert("Este invitado ya está en la lista");
        return; // Stop
    }

    // Paso C: Si todo ok, añadir al array
    invitados.push(nombre);

    // Paso D: Limpiar el input y actualizar la pantalla
    inputNombre.value = "";
    renderizarLista();
}

function renderizarLista() {
    // 1. Limpiar la lista HTML actual (para no duplicar)
    listaUl.innerHTML = "";

    // 2. Recorrer el array y crear los elementos
    invitados.forEach((invitado, indice) => {
        // Crear <li>
        const li = document.createElement("li");
        
        // Escribir el nombre dentro (usamos span para separarlo del botón)
        // Ojo al truco: Creamos el HTML interno con el botón directamente
        li.innerHTML = `
            <span>${invitado}</span>
            <button class="btn-delete">Eliminar</button>
        `;

        // 3. Darle vida al botón "Eliminar" de ESTE li
        // Buscamos el botón que acabamos de crear dentro del li
        const btnEliminar = li.querySelector(".btn-delete");
        
        btnEliminar.addEventListener("click", () => {
            eliminarInvitado(indice);
        });

        // 4. Añadir el <li> al <ul>
        listaUl.appendChild(li);
    });

    // 5. Actualizar el contador total
    contadorSpan.textContent = invitados.length;
}

function eliminarInvitado(indice) {
    // Borrar del array usando su posición
    invitados.splice(indice, 1);
    
    // Volver a pintar la lista (para que desaparezca visualmente)
    renderizarLista();
}