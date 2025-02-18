package Examen;

import java.util.Scanner;
public class ejercicio4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Leer el número entero comprendido entre 10 y 20
        int numero;
        do {
            System.out.print("Introduce un número entero entre 10 y 20: ");
            numero = scanner.nextInt();
        } while (numero < 10 || numero > 20);

 
        String numeroStr = Integer.toString(numero);
        int longitud = numeroStr.length();


        int suma = numero + numero;
        int producto = numero * numero;
        int resta = numero - numero;


        String sumaStr = Integer.toString(suma);
        String productoStr = Integer.toString(producto);
        String restaStr = Integer.toString(resta);


        String espaciosNumero = "";
        String espaciosResultado = "";
        for (int i = 0; i < longitud; i++) {
            espaciosNumero += " ";
            espaciosResultado += " ";
        }

        System.out.println("Número:    " + espaciosNumero + numero);
        System.out.println("Suma:      " + espaciosResultado + suma);
        System.out.println("Producto:  " + espaciosResultado + producto);
        System.out.println("Resta:     " + espaciosResultado + resta);
    }
}
