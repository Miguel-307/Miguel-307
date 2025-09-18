package Examen;
public class ejercicio5 {
    public static void main(String[] args) {
        String mensajeCifrado = "ZH JOL JALZ WOX OXIZNFZ";
        String mensajeDescifrado = "";
        System.out.println("Frase a traducir: "+mensajeCifrado);
        // Iterar sobre cada letra del mensaje cifrado
        for (int i = 0; i < mensajeCifrado.length(); i++) {
            char letra = mensajeCifrado.charAt(i);
            char letraDescifrada = letra; // Por defecto, la letra descifrada es la misma que la cifrada
            // Aplicar las sustituciones según las reglas dadas
            switch (letra) {
                case 'J':
                    letraDescifrada = 'S';
                    break;
                case 'H':
                    letraDescifrada = 'L';
                    break;
                case 'W':
                    letraDescifrada = 'P';
                    break;
                case 'X':
                    letraDescifrada = 'R';
                    break;
                case 'F':
                    letraDescifrada = 'T';
                    break;
                case 'Z':
                    letraDescifrada = 'E';
                    break;
                default:
                    // Si la letra no está en las reglas, mantenerla igual
                    break;
            }
            // Agregar la letra descifrada al mensaje descifrado
            mensajeDescifrado += letraDescifrada;
        }
        // Imprimir el mensaje descifrado
        System.out.println("Mensaje descifrado: " + mensajeDescifrado);
    }
}
