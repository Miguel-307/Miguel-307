// 1. DATOS: Array de objetos con la información
const peliculas = [
    { id: 1, titulo: "El Señor de los Anillos", director: "Peter Jackson", año: 2001 },
    { id: 2, titulo: "Matrix", director: "Hermanas Wachowski", año: 1999 },
    { id: 3, titulo: "Interstellar", director: "Christopher Nolan", año: 2014 },
    { id: 4, titulo: "Coco", director: "Lee Unkrich", año: 2017 }
];

// 2. REFERENCIAS: Cogemos los elementos del HTML
const selector = document.getElementById("movieSelect");
const contenedorInfo = document.getElementById("info-container");

// 3. INICIALIZACIÓN: Llenar el <select> con las opciones
// Recorremos el array de películas
peliculas.forEach(peli => {
    // Creamos la etiqueta <option>
    const opcion = document.createElement("option");
    
    // El valor que guardamos oculto es el ID (para buscarlo luego)
    opcion.value = peli.id;
    
    // El texto que ve el usuario es el Título
    opcion.textContent = peli.titulo;
    
    // Lo metemos dentro del <select>
    selector.appendChild(opcion);
});

// 4. EVENTO: Escuchar cuando el usuario cambia la opción
selector.addEventListener("change", (e) => {
    
    // Obtenemos el valor seleccionado. 
    // IMPORTANTE: Los value de HTML son siempre TEXTO. 
    // Como nuestros IDs son números, usamos parseInt() para convertirlo.
    const idSeleccionado = parseInt(e.target.value);

    // Si el ID no es un número (el usuario eligió "-- Selecciona --")
    if (isNaN(idSeleccionado)) {
        // Limpiamos y mostramos el mensaje por defecto
        contenedorInfo.innerHTML = "<p><em>Selecciona una película para ver los detalles.</em></p>";
        return; // Cortamos la función aquí
    }

    // 5. LÓGICA: Buscar la película en el array
    const peliEncontrada = peliculas.find(p => p.id === idSeleccionado);

    // 6. RENDERIZADO: Mostrar la información en el div
    if (peliEncontrada) {
        contenedorInfo.innerHTML = `
            <h2>${peliEncontrada.titulo}</h2>
            <p><strong>Director:</strong> ${peliEncontrada.director}</p>
            <p><strong>Año:</strong> ${peliEncontrada.año}</p>
        `;
    }
});