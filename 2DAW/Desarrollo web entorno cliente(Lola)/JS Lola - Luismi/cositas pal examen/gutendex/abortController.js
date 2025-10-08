let controller;

async function searchBooks(search) {
    try {
        if (controller) {
            controller.abort();
        }

        controller = new AbortController();
        const señal = controller.signal;
        books.innerHTML = "<p>Buscando...</p>";

        const response = await fetch(`https://gutendex.com/books?search=${search}`, { signal: señal });
        const data = await response.json();
        return data;
    } catch (error) {
        if(error.name === "AbortError"){
            console.log("Solicitud cancelada");
        } else {
            console.error("Error al buscar libros: ", error);
        }
        return null;
    }
}

const input = document.getElementById("search");
const books = document.getElementById("books");

input.addEventListener("input", async (event) => {
    const query = event.target.value.trim();

    if (query === "") {
        books.innerHTML = "<p>Ingrese un término de búsqueda</p>";
        return;
    }

    books.innerHTML = "<p>Buscando...</p>";

    const response = await searchBooks(query);

    if (response && response.results){
        books.innerHTML = "";

        response.results.forEach((book) => {
            const bookElement = document.createElement("p");
            bookElement.textContent = book.title;
            books.appendChild(bookElement);
        });
    }
});

function showMessage(message) {
    books.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = message;
    books.appendChild(p);
}