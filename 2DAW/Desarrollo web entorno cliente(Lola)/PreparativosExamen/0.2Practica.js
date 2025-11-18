<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Entrenamiento Intensivo JS</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: #f4f4f4; }
        h1 { text-align: center; color: #333; }
        .ejercicio { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 5px solid #2196F3; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        h2 { margin-top: 0; color: #1976D2; }
        button { padding: 10px 15px; background: #2196F3; color: white; border: none; cursor: pointer; border-radius: 4px; margin-top: 10px; }
        button:hover { background: #1976D2; }
        input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        .resultado { margin-top: 10px; font-weight: bold; color: #333; background: #e3f2fd; padding: 10px; border-radius: 4px; display: inline-block; }
        
        /* Estilos específicos */
        #cajaLuz { width: 100%; height: 50px; border: 1px solid #333; display: flex; align-items: center; justify-content: center; margin-top: 10px; transition: all 0.3s; }
    </style>
</head>
<body>

    <h1>💪 Entrenamiento para el Jueves</h1>

    <div class="ejercicio">
        <h2>1. Inversor de Palabras (Arrays)</h2>
        <p>Escribe una palabra y la pondré al revés usando <code>split</code>, <code>reverse</code> y <code>join</code>.</p>
        <input type="text" id="inputInvertir" placeholder="Ej: Examen">
        <button onclick="ejecutarInversor()">Invertir</button>
        <div id="resInvertir" class="resultado"></div>
    </div>

    <div class="ejercicio">
        <h2>2. Semáforo (Funciones)</h2>
        <p>Escribe: rojo, amarillo o verde.</p>
        <input type="text" id="inputSemaforo" placeholder="Color...">
        <button onclick="ejecutarSemaforo()">Comprobar</button>
        <div id="resSemaforo" class="resultado"></div>
    </div>

    <div class="ejercicio">
        <h2>3. Banco (POO / Clases)</h2>
        <p>Gestiona tu saldo usando una Clase <code>Cuenta</code>.</p>
        <p>Saldo actual: <span id="saldoDisplay">0</span> €</p>
        <input type="number" id="inputDinero" placeholder="Cantidad">
        <button onclick="accionBanco('ingresar')">Ingresar (+)</button>
        <button onclick="accionBanco('retirar')" style="background: #e74c3c;">Retirar (-)</button>
    </div>

    <div class="ejercicio">
        <h2>4. Interruptor (DOM)</h2>
        <p>Cambia los estilos CSS (fondo y color) al pulsar.</p>
        <div id="cajaLuz" style="background-color: white; color: black;">Soy una bombilla</div>
        <button onclick="alternarLuz()">Interruptor ON/OFF</button>
    </div>

    <div class="ejercicio">
        <h2>5. Validador en Tiempo Real (Eventos)</h2>
        <p>Escribe. Si hay menos de 6 letras es <span style="color:red">Débil</span>, si no, <span style="color:green">Fuerte</span>.</p>
        <input type="text" id="passInput" placeholder="Contraseña...">
        <span id="msgPass" style="font-weight: bold; margin-left: 10px;">Esperando...</span>
    </div>

    <div class="ejercicio">
        <h2>6. Reloj (BOM / SetInterval)</h2>
        <p>Usa <code>setInterval</code> para actualizar la hora cada segundo.</p>
        <div id="reloj" class="resultado" style="font-size: 1.5em;">00:00:00</div>
    </div>

    <script>
        // --- 1. Lógica Inversor ---
        function ejecutarInversor() {
            const texto = document.getElementById('inputInvertir').value;
            // Convertimos a array, invertimos y unimos de nuevo
            const invertido = texto.split('').reverse().join('');
            document.getElementById('resInvertir').textContent = invertido;
        }

        // --- 2. Lógica Semáforo ---
        function ejecutarSemaforo() {
            const color = document.getElementById('inputSemaforo').value.toLowerCase();
            let mensaje = "";
            
            if (color === "rojo") mensaje = "¡ALTO! 🛑";
            else if (color === "amarillo") mensaje = "Precaución ⚠️";
            else if (color === "verde") mensaje = "Adelante 🟢";
            else mensaje = "Color no reconocido 🤷";

            document.getElementById('resSemaforo').textContent = mensaje;
        }

        // --- 3. Lógica Banco (POO) ---
        class Cuenta {
            constructor(saldoInicial) {
                this.saldo = saldoInicial;
            }
            ingresar(cantidad) {
                this.saldo += cantidad;
            }
            retirar(cantidad) {
                if(cantidad <= this.saldo) {
                    this.saldo -= cantidad;
                } else {
                    alert("¡No tienes tanto dinero!");
                }
            }
        }
        // Instanciamos la clase
        const miCuenta = new Cuenta(0);

        function accionBanco(tipo) {
            const cantidad = parseFloat(document.getElementById('inputDinero').value);
            if(isNaN(cantidad) || cantidad <= 0) return;

            if(tipo === 'ingresar') miCuenta.ingresar(cantidad);
            if(tipo === 'retirar') miCuenta.retirar(cantidad);

            // Actualizamos el DOM
            document.getElementById('saldoDisplay').textContent = miCuenta.saldo;
        }

        // --- 4. Lógica Interruptor (DOM) ---
        let encendido = false; // Estado inicial
        function alternarLuz() {
            const caja = document.getElementById('cajaLuz');
            
            if (encendido) {
                // Apagar
                caja.style.backgroundColor = "white";
                caja.style.color = "black";
                encendido = false;
            } else {
                // Encender
                caja.style.backgroundColor = "#2c3e50"; // Gris oscuro
                caja.style.color = "#f1c40f"; // Amarillo texto
                encendido = true;
            }
        }

        // --- 5. Lógica Validador (Eventos) ---
        // Usamos addEventListener en lugar de onclick en el HTML
        document.getElementById('passInput').addEventListener('input', (e) => {
            const texto = e.target.value;
            const msg = document.getElementById('msgPass');

            if (texto.length === 0) {
                msg.textContent = "Esperando...";
                msg.style.color = "black";
            } else if (texto.length < 6) {
                msg.textContent = "Débil 🔓";
                msg.style.color = "red";
            } else {
                msg.textContent = "Fuerte 🔒";
                msg.style.color = "green";
            }
        });

        // --- 6. Lógica Reloj (BOM) ---
        // Se ejecuta al cargar la página
        setInterval(() => {
            const fecha = new Date();
            document.getElementById('reloj').textContent = fecha.toLocaleTimeString();
        }, 1000);

    </script>
</body>
</html>