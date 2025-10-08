const productosElectronicos = [];
const ejercicio4 = document.getElementById("ejercicio4");
const busqueda = document.getElementById("busqueda");
const productosFiltradosTotales = document.getElementById("productosFiltrados");
const tablaDatos = document.getElementById("tablaDatos");
const tablaDatosHeader = tablaDatos.querySelector("thead");
const tablaDatosBody = tablaDatos.querySelector("tbody");
const before = document.getElementById("before");
const after = document.getElementById("after");
const productosPaginaMostrar = document.getElementById("productosPaginaMostrar");
const ejercicio5 = document.getElementById("ejercicio5");
let paginacion = 0;
let timeoutId = null;
async function getData() {
    try {
        const response = await fetch("large_dataset.json");
        const { products: productosReales } = await response.json();
        
        if (!Array.isArray(productosReales)) {
            throw new Error("El formato de los datos no es un array.");
        }
        return Array.from(productosReales);
    } catch (error) {
        console.error(`Hubo un error: ${error.message}`);
    }
}

function getElectronics(productos) {
    const productosElectronicos = productos.filter(
        producto => producto.category === "Electr\u00f3nica" && producto.price > 50
    );
    console.log(productosElectronicos);
}

function getLimit(productos, limite) {

    const productosVer = productos.slice(0, parseInt(limite));

    const headers = ["id", "nombre", "precio", "categoría"];
    const tablaDatosHeaderRow = document.createElement("tr");

    for (let index = 0; index < headers.length; index++) {
        const columnaHeader = document.createElement("th");
        columnaHeader.textContent = headers[index];
        tablaDatosHeaderRow.appendChild(columnaHeader);
    }

    tablaDatosHeader.appendChild(tablaDatosHeaderRow);

    productosVer.map(producto => {
        const filaCuerpo = document.createElement("tr");
        filaCuerpo.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.name}</td>
        <td>${producto.price}</td>
        <td>${producto.category}</td>`;
        tablaDatosBody.appendChild(filaCuerpo)
    })


    /**Solución 2 */

    /**Como en este caso la respuesta del json viene de un id
     * de autoincremento podemos usar el filter
     * diciendole que muestre los que sean ese id o menor 
    */

    /**    const productosVer = productos.filter(
        producto => producto.id <= limite
    ); */
    console.log(productosVer);


}

function showProducsFromLocalStorage(productos) {
    const productosModa = productos.filter(
        producto => producto.category === 'Moda'
    );
    
    // Convertir a JSON string antes de guardar
    localStorage.setItem("productosModa", JSON.stringify(productosModa));
    
    // Parsear el JSON string de vuelta a objeto cuando se recupera
    const productosModaMostrar = JSON.parse(localStorage.getItem("productosModa"));
    console.log("productos moda")
    console.log(productosModaMostrar);
}

function mostrarConPaginacion(productos, direccion = 0) {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(productos.length / itemsPerPage);
    
    // Actualizar paginación con validación
    if (direccion !== 0) {
        const nuevaPaginacion = paginacion + direccion;
        if (nuevaPaginacion >= 0 && nuevaPaginacion < totalPages) {
            paginacion = nuevaPaginacion;
        } else {
            return;
        }
    }
    
    const startIndex = paginacion * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, productos.length);
    
    const productosPagina = productos.slice(startIndex, endIndex);
    productosPaginaMostrar.innerHTML = "";
    
    productosPagina.forEach(producto => {
        productosPaginaMostrar.innerHTML += `
            <div>
                <p>${producto.id}</p>
                <p>${producto.name}</p>
                <p>${producto.category}</p>
                <p>${producto.price}</p>
            </div>
        `;
    });
    
    // Actualizar estado de los botones
    before.disabled = paginacion === 0;
    after.disabled = paginacion >= totalPages - 1;
}

function filtrarProductos(productos) {
    const busquedaMinusculas = busqueda.value.toLowerCase();
    const productosFiltrados = productos.filter(
        producto => producto.name.toLowerCase().includes(busquedaMinusculas) || 
                   producto.category.toLowerCase().includes(busquedaMinusculas)
    );
    
    productosFiltradosTotales.innerHTML = "";
    
    if (productosFiltrados.length === 0) {
        productosFiltradosTotales.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }
    
    productosFiltrados.forEach(producto => {
        const ProductoFiltradoDiv = document.createElement("div");
        ProductoFiltradoDiv.innerHTML = `
            <p>${producto.id}</p>
            <p>${producto.name}</p>
            <p>${producto.category}</p>
            <p>${producto.price}</p>
        `;
        productosFiltradosTotales.appendChild(ProductoFiltradoDiv);
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    const productos = await getData();
    getElectronics(productos);
    getLimit(productos, 20);
    showProducsFromLocalStorage(productos);
    mostrarConPaginacion(productos);

    // Mejorar el filtrado con debounce
    busqueda.addEventListener("input", () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            filtrarProductos(productos);
            timeoutId = null;
        }, 650);
    });

    before.addEventListener("click", () => {
        mostrarConPaginacion(productos, -1);
    });

    after.addEventListener("click", () => {
        mostrarConPaginacion(productos, 1);
    });
});

