// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("validation-form");

    // Configuración de validaciones
    const fields = [
        { id: "name", regex: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+( [A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/, errorMsg: "Nombre inválido" },
        { id: "surname", regex: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+( [A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/, errorMsg: "Apellidos inválidos" },
        { id: "phone", regex: /^(\+34 )?\d{3} \d{3} \d{3}$/, errorMsg: "Teléfono inválido" },
        { id: "email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMsg: "Correo electrónico inválido" },
        { id: "dni", regex: /^\d{8}[A-Za-z]$/, errorMsg: "DNI inválido" },
        { id: "iban", regex: /^ES\d{2} \d{4} \d{4} \d{4} \d{4} \d{4}$/, errorMsg: "IBAN inválido" },
        { id: "dob", regex: /^(\d{2})\/(\d{2})\/(\d{4})$/, errorMsg: "Fecha de nacimiento inválida" },
        { id: "postal-code", regex: /^\d{5}$/, errorMsg: "Código postal inválido" },
        { id: "credit-card", regex: /^\d{4} \d{4} \d{4} \d{4}$/, errorMsg: "Tarjeta de crédito inválida" },
        { id: "vehicle", regex: /^\d{4} [A-Za-z]{3}$/, errorMsg: "Placa de vehículo inválida" },
        { id: "social-security", regex: /^\d{3}-\d{2}-\d{4}$/, errorMsg: "NSS inválido" },
        { id: "url", regex: /^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\/.*)?$/, errorMsg: "URL inválida" }
    ];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        fields.forEach((field) => {
            const input = document.getElementById(field.id);
            if (!field.regex.test(input.value)) {
                alert(field.errorMsg);
                valid = false;
            }
        });

        if (valid) {
            alert("Todos los campos son válidos.");
        }
    });
});
