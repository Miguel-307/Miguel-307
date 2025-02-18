package Examen;
public class ejercicio1 {
    public static void main(String[] args) {
        String frase = "Cuando sale el Sol se seca el agua caída por la lluvia";

        StringBuilder segundoString = new StringBuilder();

        StringBuilder palabraActual = new StringBuilder();
        for (int i = 0; i < frase.length(); i++) {
            char caracter = frase.charAt(i);

            if (caracter != ' ') {
                palabraActual.append(caracter);
            } else {
                int numVocales = contarVocales(palabraActual.toString());

                if (numVocales > 1) {
                    segundoString.append(palabraActual).append(" ");
                }

                palabraActual = new StringBuilder();
            }
        }

        // Verificar la última palabra
        int numVocales = contarVocales(palabraActual.toString());
        if (numVocales > 1) {
            segundoString.append(palabraActual).append(" ");
        }

        System.out.println("Frase: " + frase);
        System.out.println("Segundo string: " + segundoString.toString());
    }

    public static int contarVocales(String palabra) {
        int contador = 0;
        for (int i = 0; i < palabra.length(); i++) {
            char letra = Character.toLowerCase(palabra.charAt(i));
            if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
                contador++;
            }
        }
        return contador;
    }
}
