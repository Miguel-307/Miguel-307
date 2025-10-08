// Función asíncrona para buscar libros en la API de Gutendex
async function searchBooks(search) {
    try {
      const response = await fetch(`https://gutendex.com/books?search=${search}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al buscar libros:", error);
      return null; // En caso de error, retornamos null
    }
  }
  const input = document.getElementById("search");
  const books = document.getElementById("books");
  input.addEventListener("input", async (event) => {
    const query = event.target.value.trim(); // Obtiene el texto ingresado
    if (query === "") {
      books.innerHTML = "<p>Ingrese un término de búsqueda</p>";
      return;
    }
    books.innerHTML = "<p>Buscando...</p>"; // Mensaje de carga
    const response = await searchBooks(query);
    if (response && response.results) {
      books.innerHTML = ""; // Limpiar contenido previo
      response.results.forEach((book) => {
        books.innerHTML += `<p>${book.title}</p>`; // Mostrar resultados
      });
    } else {
      books.innerHTML = "<p>Error al buscar libros</p>"; // Manejo de error
    }
  });
  