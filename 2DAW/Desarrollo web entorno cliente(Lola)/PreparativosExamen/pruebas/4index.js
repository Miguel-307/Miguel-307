// 1. VARIABLES DE ESTADO
        let segundos = 0;       // Aquí guardamos el tiempo
        let intervalo = null;   // Aquí guardamos el "ID" del temporizador para poder pararlo

        // 2. REFERENCIAS AL DOM
        const display = document.getElementById("display");
        const btnStart = document.getElementById("btnStart");
        const btnStop = document.getElementById("btnStop");
        const btnReset = document.getElementById("btnReset");

        // 3. FUNCIÓN START
        btnStart.addEventListener("click", () => {
            
            // Evitamos que se pueda pulsar Start si ya está corriendo
            // (aunque lo desactivamos visualmente, es buena práctica lógica)
            if (intervalo) return;

            // Iniciamos el intervalo: Sumar 1 cada 1000ms (1 segundo)
            intervalo = setInterval(() => {
                segundos++;
                display.textContent = segundos;
            }, 1000);

            // Gestionar botones (UX)
            btnStart.disabled = true;  // Desactivar Start
            btnStop.disabled = false;  // Activar Stop
            btnReset.disabled = false; // Activar Reset
        });

        // 4. FUNCIÓN STOP
        btnStop.addEventListener("click", () => {
            // Paramos el reloj usando el ID guardado en 'intervalo'
            clearInterval(intervalo);
            intervalo = null; // Limpiamos la variable para saber que está parado

            // Gestionar botones
            btnStart.disabled = false; // Podemos volver a empezar
            btnStop.disabled = true;   // Ya está parado
        });

        // 5. FUNCIÓN RESET
        btnReset.addEventListener("click", () => {
            // 1. Parar el reloj (importante, si no sigue contando en 0, 1, 2...)
            clearInterval(intervalo);
            intervalo = null;

            // 2. Reiniciar datos
            segundos = 0;
            
            // 3. Actualizar pantalla
            display.textContent = segundos;

            // 4. Gestionar botones (volver al estado inicial)
            btnStart.disabled = false;
            btnStop.disabled = true;
            btnReset.disabled = true;
        });