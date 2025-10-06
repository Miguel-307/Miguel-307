var festivalesJSON = `{
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compania": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compania": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compania": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polvo y flores",
                "Detroit"
            ]
        }
    ]
}`;

        var festivales = JSON.parse(festivalesJSON);


        var container = document.getElementById("container");

        container.innerHTML += "<h1>Festival: " + festivales.Festival + "</h1>";
        container.innerHTML += "<p><strong>Ciudad:</strong> " + festivales.Ciudad + "</p>";
        container.innerHTML += "<p><strong>Año:</strong> " + festivales.Anno + "</p>";

        festivales.Grupos.forEach(function(grupo) {
            container.innerHTML += "<article>";
            container.innerHTML += "<h2>" + grupo.nombre + "</h2>";
            container.innerHTML += "<p><strong>Compañía:</strong> " + grupo.compania + "</p>";
            container.innerHTML += "<p><strong>Discografía</strong></p>";

            container.innerHTML += "<ul>";
            grupo.discos.forEach(function(disco) {
                container.innerHTML += "<li>" + disco + "</li>";
            });
            container.innerHTML += "</ul>";
            container.innerHTML += "</article>";
        });