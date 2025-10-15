// ======= DATOS =======
const datosTienda = {
  estadisticas: {
    totalVentas: 905,
    mediaMensual: 150.83,
    mesMayor: { mes: 6, unidades: 200 },
    mesMenor: { mes: 3, unidades: 95 },
    sumaPrecios: 308.43
  },
  productos: [
    {
      nombre: "Cable USB-C 2m",
      descripcion: "Carga rápida y transferencia de datos.",
      precio: 9.99,
      disponible: true
    },
    {
      nombre: "Ratón ergonómico Pro",
      descripcion: "Diseño vertical para reducir tensión en la muñeca.",
      precio: 39.0,
      disponible: false
    },
    {
      nombre: "Auriculares Bluetooth X200",
      descripcion: "Auriculares inalámbricos con cancelación parcial de ruido.",
      precio: 49.99,
      disponible: true
    },
    {
      nombre: "Teclado mecánico TKL",
      descripcion: "Compacto, switches táctiles y retroiluminación RGB.",
      precio: 79.5,
      disponible: true
    },
    {
      nombre: 'Monitor 24" 1080p',
      descripcion: "120Hz, panel IPS y soporte ajustable.",
      precio: 129.95,
      disponible: true
    }
  ]
};

// ======= ELEMENTOS =======
const statsDiv = document.getElementById("stats");
const productosDiv = document.getElementById("productos");
const botonOrdenar = document.getElementById("ordenar");

// ======= FUNCIONES =======
function mostrarEstadisticas() {
  const e = datosTienda.estadisticas;
  statsDiv.innerHTML = `
    <p><strong>Total ventas (últimos 6 meses):</strong><br>${e.totalVentas} unidades</p>
    <p><strong>Media mensual:</strong><br>${e.mediaMensual} unidades</p>
    <p><strong>Mes con mayor venta:</strong><br>Mes ${e.mesMayor.mes} — ${e.mesMayor.unidades} unidades</p>
    <p><strong>Mes con menor venta:</strong><br>Mes ${e.mesMenor.mes} — ${e.mesMenor.unidades} unidades</p>
    <p><strong>Suma precios productos:</strong><br>€ ${e.sumaPrecios}</p>
  `;
}

function mostrarProductos(lista) {
  productosDiv.innerHTML = "";
  lista.forEach((p) => {
    productosDiv.innerHTML += `
      <div class="producto">
        <h3>${p.nombre}</h3>
        <p class="descripcion">${p.descripcion}</p>
        <p class="precio">€ ${p.precio.toFixed(2)}</p>
        <p class="${p.disponible ? "disponible" : "agotado"}">
          ${p.disponible ? "Disponible" : "Agotado"}
        </p>
      </div>
    `;
  });
}


// ======= INICIO =======
mostrarEstadisticas();
mostrarProductos(datosTienda.productos);
