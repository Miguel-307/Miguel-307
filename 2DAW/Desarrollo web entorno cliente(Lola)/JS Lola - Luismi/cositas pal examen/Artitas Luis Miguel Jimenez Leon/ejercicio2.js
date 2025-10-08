const cargarJSON = async () => {
  let datos;
  try {
    const respuesta = await fetch(`artistas.json`);
    console.log(respuesta);

    // Si la respuesta es correcta
    switch (respuesta.status) {
      case 200:
        datos = await respuesta.json();
        break;
      case 400:
        console.log("No autorizado");
        break;
      case 403:
        console.log("Acceso restringido");
        break;
      case 404:
        console.log("Archivo no encontrado");
        break;
      default:
        console.log("Error desconocido");
        break;
    }
  } catch (error) {
    console.log(error);
  }
  console.log(datos);
  return datos;
};

// Obtenemos los elementos por su id
const cantanteSelect = document.getElementById("cantanteSelect");
const tablaContenedor = document.getElementById("tablaContainer");

const figure = document.createElement("figure");
const figCaption = document.createElement("figcaption");
const artistaFoto = document.createElement("img");

// Cargar y usar los datos
cargarJSON().then((artistas) => {
  crearOpcionesSelect(artistas);

  // Crear el evento de cambio en el select
  cantanteSelect.addEventListener("change", () =>
    manejarSelect(artistas)
  );
});

function crearOpcionesSelect(artistas) {
  artistas.forEach((artista, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = artista.nombre;
    cantanteSelect.appendChild(option);
  });
}

function crearTablaCanciones(canciones) {
  const tabla = document.createElement("table");
  const encabezado = crearEncabezadoTabla();
  const cuerpo = crearCuerpoTabla(canciones);

  tabla.appendChild(encabezado);
  tabla.appendChild(cuerpo);

  return tabla;
}

function crearEncabezadoTabla() {
  const encabezado = document.createElement("thead");
  const filaTH = document.createElement("tr");
  const celdaTH = document.createElement("th");

  celdaTH.textContent = "Temas";
  filaTH.appendChild(celdaTH);
  encabezado.appendChild(filaTH);

  return encabezado;
}

function crearCuerpoTabla(canciones) {
  const cuerpo = document.createElement("tbody");

  canciones.forEach((cancion) => {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.textContent = cancion;
    fila.appendChild(celda);
    cuerpo.appendChild(fila);
  });

  return cuerpo;
}

function mostrarTemas(artista) {
  // Limpiar la tabla y la foto cada vez que se selecciona un nuevo cantante
  tablaContenedor.innerHTML = "";
  figCaption.innerHTML = "";
  // Crear la tabla con las canciones
  const tabla = crearTablaCanciones(artista.canciones);

  // Establecer la foto del artista
  artistaFoto.src = artista.foto;
  artistaFoto.alt = `Foto de ${artista.nombre}`;

  // Crear la figura con la foto y la tabla
  figCaption.appendChild(tabla);
  figure.appendChild(artistaFoto);
  figure.appendChild(figCaption);

  // Insertar la figura con la foto y la tabla en el contenedor
  tablaContenedor.appendChild(figure);
}

// Función para manejar el evento de cambio en el select de artistas.
function manejarSelect(artistas) {
  const seleccion = cantanteSelect.value;

  if (!seleccion) {
    // Si no se selecciona un artista, limpiamos la tabla y la foto
    figCaption.innerHTML = "";
    tablaContenedor.innerHTML = "";
    return;
  }

  figCaption.innerHTML = "";
  const artista = artistas[seleccion];
  mostrarTemas(artista);
}
