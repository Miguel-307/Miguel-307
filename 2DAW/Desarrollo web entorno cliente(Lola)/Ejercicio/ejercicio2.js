const artistas = [
    {
      nombre: "Karol G",
      canciones: ["Tusa", "Provenza", "Bichota", "Si Antes Te Hubiera Conocido"]
    },
    {
      nombre: "Shakira",
      canciones: ["Hips Don't Lie", "Waka Waka (This Time for Africa)", "La Tortura", "Puntería"]
    },
    {
      nombre: "Rosalía",
      canciones: ["Con Altura", "Malamente", "Despechá", "Motomami"]
    },
    {
      nombre: "Luis Fonsi",
      canciones: ["Despacito", "Échame la Culpa", "No Me Doy Por Vencido", "Aquí Estoy Yo"]
    }
  ];


// 1. Referencias a los elementos del DOM (sin tocar el HTML)
const selectCantante = document.getElementById('cantanteSelect');
const tablaContainer = document.getElementById('tablaContainer');

// 2. Llenar el <select> con los nombres de los artistas
artistas.forEach(artista => {
    const option = document.createElement('option');
    option.value = artista.nombre;      // El valor será el nombre del artista
    option.textContent = artista.nombre; // Lo que ve el usuario
    selectCantante.appendChild(option);
});

// 3. Escuchar el evento 'change' para saber cuándo cambia la selección
selectCantante.addEventListener('change', (event) => {
    const nombreSeleccionado = event.target.value;
    generarTabla(nombreSeleccionado);
});

// 4. Función para construir y mostrar la tabla
function generarTabla(nombre) {
    // Limpiar la tabla anterior (si hay alguna)
    tablaContainer.innerHTML = '';

    // Si el usuario seleccionó la opción por defecto ("-- Selecciona --"), paramos aquí
    if (!nombre) return;

    // Buscar los datos del artista seleccionado en el array
    const artistaEncontrado = artistas.find(a => a.nombre === nombre);

    if (artistaEncontrado) {
        // Crear elementos de la tabla
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');
        const th = document.createElement('th');

        // Configurar cabecera
        th.textContent = `Canciones de ${artistaEncontrado.nombre}`;
        headerRow.appendChild(th);
        thead.appendChild(headerRow);

        // Crear filas para cada canción
        artistaEncontrado.canciones.forEach(cancion => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = cancion;
            tr.appendChild(td);
            tbody.appendChild(tr);
        });

        // Unir las partes de la tabla
        table.appendChild(thead);
        table.appendChild(tbody);

        // Insertar la tabla en el div contenedor del HTML
        tablaContainer.appendChild(table);
    }
}