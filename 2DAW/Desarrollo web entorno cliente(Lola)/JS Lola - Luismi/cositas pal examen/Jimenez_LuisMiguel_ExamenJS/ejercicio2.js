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
//Añade aqui tu código

//Obtenemos los elementos por su id
const cantanteSelect = document.getElementById('cantanteSelect');
const tablaContenedor = document.getElementById('tablaContainer');

/**Por cada artista
 * creamos la opcion y le damos
 * el valor del index y el nombre visible
 * y lo añadimos al select
 */
artistas.forEach((artista, index) => {
  const option = document.createElement('option');
  option.value = index; 
  option.textContent = artista.nombre;
  cantanteSelect.appendChild(option);
});

//Función para mostrar los temas
function mostrarTemas(canciones) {
  //limpiamos la tabla cada vez que elegimos un nuevo cantante
  tablaContenedor.innerHTML = '';
  //Creamos la tabla y sus elementos
  const tabla = document.createElement('table');
  const encabezado = document.createElement('thead');
  const filaTH = document.createElement('tr');
  const celdaTH = document.createElement('th');
  //Añadimos la celda a la fila, la fila al th, el th a la tabla...
  celdaTH.textContent = 'Temas';
  filaTH.appendChild(celdaTH);
  encabezado.appendChild(filaTH);
  tabla.appendChild(encabezado);
  //Creamos el cuerpo de la tabla
  const cuerpo = document.createElement('tbody');
  /**
   * Por cada canción creamos la fila,
   * la celda y ponemos el nombre de la canción
   * en la celda y lo agregamos
   */
  canciones.forEach((cancion) => {
      const fila = document.createElement('tr');
      const celda = document.createElement('td');
      celda.textContent = cancion;
      fila.appendChild(celda);
      cuerpo.appendChild(fila);
  });
  //Finalmente agregamos el cuerpo y la tabla en sí
  tabla.appendChild(cuerpo);
  tablaContenedor.appendChild(tabla);
}

//Creamos el evento de cambio del select
cantanteSelect.addEventListener('change', () => {
  const seleccion = cantanteSelect.value;
  //Si no seleccionamos nada quitamos la tabla
  if (!seleccion) {
      tablaContenedor.innerHTML = '';
      return;
  }
  //Seleccionamos el artista a partir del value que concuerda con el indice
  const artista = artistas[seleccion];
  //Mostramos los temas
  mostrarTemas(artista.canciones);
});