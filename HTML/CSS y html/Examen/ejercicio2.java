package Examen;


public class ejercicio2 {
    public static void main(String[] args) {
        String frase = "Solo 3 de los 6 jugadores acabaron el partido";
        String fraseConvertida = convertirNum(frase);
        System.out.println(fraseConvertida);
    }

    public static String convertirNum(String frase) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < frase.length(); i++) {
            char caracter = frase.charAt(i);
            if (Character.isDigit(caracter)) {
                String palabra = convertirDig(caracter);
                sb.append(palabra);
            } else {
                sb.append(caracter);
            }
        }

        return sb.toString();
    }

    public static String convertirDig(char digito) {
        switch (digito) {
            case '1':
                return "uno";
            case '2':
                return "dos";
            case '3':
                return "tres";
            case '4':
                return "cuatro";
            case '5':
                return "cinco";
            case '6':
                return "seis";
            case '7':
                return "siete";
            case '8':
                return "ocho";
            case '9':
                return "nueve";
            default:
                return String.valueOf(digito);
        }
    }
}
