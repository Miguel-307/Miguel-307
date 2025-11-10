// =======================
// 1. Definir productos
// =======================
const products = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 15.5 },
  { id: 3, name: "Producto C", price: 7.25 },

];

// =======================
// 2. Estado del carrito
// =======================
let cart = []; // cada elemento: { id, name, price, cantidad }

// =======================
// 3. Renderizar productos
// =======================
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Precio: $${product.price.toFixed(2)}</p>
      <button class="add-btn" data-id="${product.id}">Añadir al Carrito</button>
    `;

    productList.appendChild(productDiv);
  });

  // Escuchar clics en los botones "Añadir"
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
}

// =======================
// 4. Añadir al carrito
// =======================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.cantidad += 1;
  } else {
    cart.push({ ...product, cantidad: 1 });
  }

  renderCart();
}

// =======================
// 5. Quitar una unidad del carrito
// =======================
function removeOneFromCart(id) {
  const item = cart.find(prod => prod.id === id);
  if (!item) return;

  item.cantidad -= 1;
  if (item.cantidad <= 0) {
    // Si llega a 0, eliminar completamente del carrito
    cart = cart.filter(prod => prod.id !== id);
  }

  renderCart();
}

// =======================
// 6. Renderizar carrito
// =======================
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} x ${item.cantidad}
      <button class="remove-btn" data-id="${item.id}">Eliminar 1</button>
    `;
    cartItems.appendChild(li);
    total += item.price * item.cantidad;
  });

  totalPrice.textContent = total.toFixed(2);

  // Escuchar clics en los botones "Eliminar 1"
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      removeOneFromCart(id);
    });
  });
}

// =======================
// 7. Inicialización
// =======================
renderProducts();
renderCart();
