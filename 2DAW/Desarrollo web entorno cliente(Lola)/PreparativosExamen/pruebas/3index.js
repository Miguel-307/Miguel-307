// 1. Seleccionamos el formulario y el div de resultado
const formulario = document.getElementById("shippingForm");
const resultadoDiv = document.getElementById("resultado");

// 2. Escuchamos el evento 'submit' del formulario
formulario.addEventListener("submit", (e) => {
    
    // 3. IMPORTANTE: Evitar que la página se recargue
    e.preventDefault();

    // 4. Obtener los valores de los inputs
    // Usamos parseFloat porque el peso puede ser decimal (2.5 kg)
    const peso = parseFloat(document.getElementById("peso").value);
    const destino = document.getElementById("destino").value;
    
    // Truco para Radio Buttons: Seleccionar el que esté marcado (:checked)
    const tipoEnvio = document.querySelector('input[name="tipo"]:checked').value;

    // 5. Validaciones
    // Si el peso no es un número o es menor que 0, o no hay destino...
    if (isNaN(peso) || peso <= 0 || destino === "") {
        resultadoDiv.style.color = "red";
        resultadoDiv.textContent = "❌ Error: Rellena el peso y el destino correctamente.";
        return; // Cortamos la ejecución aquí
    }

    // 6. Lógica de Cálculo
    let coste = 5; // Precio Base (5€)

    // Sumar precio por peso (1€ por kg)
    coste += peso * 1;

    // Sumar precio por destino
    if (destino === "europa") {
        coste += 10;
    } else if (destino === "internacional") {
        coste += 20;
    }
    // Nota: Si es "nacional", no sumamos nada (+0)

    // 7. Aplicar extra por Envío Urgente (+20%)
    if (tipoEnvio === "express") {
        // Multiplicar por 1.20 es lo mismo que sumar el 20%
        coste = coste * 1.20; 
    }

    // 8. Mostrar Resultado (toFixed(2) para mostrar siempre 2 decimales)
    resultadoDiv.style.color = "black"; // Restaurar color negro si hubo error antes
    resultadoDiv.textContent = `Coste total: ${coste.toFixed(2)} €`;
});