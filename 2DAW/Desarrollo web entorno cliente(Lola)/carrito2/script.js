
const cartIcon = document.getElementById("cart-icon");
const cartDropdown = document.getElementById("cart-dropdown");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const productList = document.getElementById("product-list");

let cart = [];


const jsonString = `
[
  { "id": 1, "name": "Producto A", "price": 10 },
  { "id": 2, "name": "Producto BBB", "price": 15 },
  { "id": 3, "name": "Producto C", "price": 20 },
  { "id": 4, "name": "Producto D", "price": 12 },
  { "id": 5, "name": "Producto E", "price": 18 },
  { "id": 6, "name": "Producto F", "price": 25 },
  { "id": 7, "name": "Producto G", "price": 30 },
  { "id": 8, "name": "Producto H", "price": 22 },
  { "id": 9, "name": "Producto I", "price": 19 },
  { "id": 10, "name": "Producto J", "price": 35 },
  { "id": 11, "name": "Producto K", "price": 40 },
  { "id": 12, "name": "Producto L", "price": 50 },
  { "id": 13, "name": "Producto M", "price": 5 },
  { "id": 14, "name": "Producto N", "price": 28 },
  { "id": 15, "name": "Producto O", "price": 14 },
  { "id": 16, "name": "Producto P", "price": 23 },
  { "id": 17, "name": "Producto Q", "price": 16 },
  { "id": 18, "name": "Producto R", "price": 45 },
  { "id": 19, "name": "Producto S", "price": 37 },
  { "id": 20, "name": "Producto T", "price": 12 },
  { "id": 21, "name": "Producto U", "price": 24 },
  { "id": 22, "name": "Producto V", "price": 32 },
  { "id": 23, "name": "Producto W", "price": 29 },
  { "id": 24, "name": "Producto X", "price": 27 },
  { "id": 25, "name": "Producto Y", "price": 33 },
  { "id": 26, "name": "Producto Z", "price": 10 },
  { "id": 27, "name": "Producto AA", "price": 42 },
  { "id": 28, "name": "Producto BB", "price": 38 },
  { "id": 29, "name": "Producto CC", "price": 11 },
  { "id": 30, "name": "Producto DD", "price": 48 },
  { "id": 31, "name": "Producto EE", "price": 19 },
  { "id": 32, "name": "Producto FF", "price": 15 }
]
`;
const products = JSON.parse(jsonString);

// ... (Tu función de pintar productos inicial) ...
products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Comprar</button>
    `;
    productList.appendChild(li);
});

// ... (Tu función addToCart) ...
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product); // Solo añadimos el producto
        updateCartUI();
    }
}

// ... (Tu función removeFromCart) ...
// Esta función debe eliminar solo UNA unidad del producto, no todas.
function removeFromCart(productId) {
    // Buscamos la PRIMERA ocurrencia del producto en el carrito
    const index = cart.findIndex(item => item.id === productId);
    
    // Si existe, lo eliminamos (solo una unidad)
    if (index > -1) {
        cart.splice(index, 1);
        updateCartUI(); // Actualizamos la vista
    }
}

// 6. Actualizar la interfaz del carrito (¡ESTA ES LA MÁS CAMBIADA!)
function updateCartUI() {
    cartCount.textContent = cart.length; // Sigue siendo la cantidad TOTAL de items
    cartItemsList.innerHTML = "";

    // 1. Agrupar productos: Creamos un objeto para contar las cantidades
    const groupedCartItems = {};
    cart.forEach(item => {
        if (groupedCartItems[item.id]) {
            groupedCartItems[item.id].quantity++;
            groupedCartItems[item.id].totalPrice += item.price;
        } else {
            // Clonamos el objeto para no modificar el original en 'products'
            groupedCartItems[item.id] = { ...item, quantity: 1, totalPrice: item.price };
        }
    });

    // 2. Recorrer los productos AGRUPADOS para pintar la lista
    // Object.values(groupedCartItems) nos da un array con los objetos agrupados
    Object.values(groupedCartItems).forEach(item => {
        const li = document.createElement("li");
        li.classList.add("producto-carrito"); // Mantiene tu estilo CSS

        // Formatear el precio a 2 decimales
        const formattedPrice = item.totalPrice.toFixed(2);
        
        // AQUI ESTÁ EL HTML MODIFICADO PARA LA CANTIDAD Y EL PRECIO TOTAL AGRUPADO
        li.innerHTML = `
            <span>${item.name}</span>
            <div class="item-details">
                <span class="item-quantity">x ${item.quantity}</span>
                <span class="item-price">$${formattedPrice}</span>
                <button class="btn-delete" onclick="removeFromCart(${item.id})">X</button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });
}

// ... (Tu función de mostrar/ocultar carrito) ...
cartIcon.addEventListener("click", () => {
    if (cartDropdown.style.display === "none" || cartDropdown.style.display === "") {
        cartDropdown.style.display = "block"; 
    } else {
        cartDropdown.style.display = "none"; 
    }
});