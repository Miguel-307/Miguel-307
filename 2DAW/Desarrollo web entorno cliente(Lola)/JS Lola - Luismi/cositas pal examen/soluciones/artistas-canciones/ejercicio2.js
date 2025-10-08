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
      nombre: "Rosalía",
      canciones: ["Con Altura", "Malamente", "Despechá", "Motomami"]
    },
    {
      nombre: "Luis Fonsi",
      canciones: ["Despacito", "Échame la Culpa", "No Me Doy Por Vencido", "Aquí Estoy Yo"]
    }
  ];

window.onload = () => {

   //const cantantesUnicos = [...new Map(  artistas.map(item => [item.nombre, item])    ) .values()];// sin duplicados
  
    const cantanteSelect = document.getElementById("cantanteSelect");
    // Crear opciones únicas en la lista desplegable
        artistas.forEach(cantante => {
        const option = document.createElement("option");
        //option.value = cantante.nombre; -> no hace falta
        option.textContent = cantante.nombre;
        cantanteSelect.appendChild(option);
    });
    //Listener para todo el selector
    cantanteSelect.addEventListener("click", (event) => {
        const cantanteSeleccionado = event.target.value;//contiene el valor seleccionado
        console.log(event.target.textContent);
        const tablaContainer = document.getElementById("tablaContainer");

        // Limpio el contenedor de la tabla si ya existe una
        tablaContainer.innerHTML = "";

        // Si no hay cantante seleccionado, salir
        if (!cantanteSeleccionado) return;

        // Obtener las canciones del cantante seleccionado
        const cantante = artistas.find(a => a.nombre === cantanteSeleccionado);
        if (!cantante) return;

        // Crear tabla con las canciones
        const table = document.createElement("table");
        //sin encabezado: // Crear filas con las canciones
        cantante.canciones.forEach(cancion => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = cancion;
            row.appendChild(cell);
            table.appendChild(row);
        });
        tablaContainer.appendChild(table);
    });
};
/*// Crear encabezado de la tabla
        const headerRow = document.createElement("tr");
        const headerCell = document.createElement("th");
        headerCell.textContent = "canciones";
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);*/