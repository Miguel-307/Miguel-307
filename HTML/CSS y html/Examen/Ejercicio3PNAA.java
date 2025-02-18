import java.util.ArrayList;
import java.util.Scanner;

public class Ejercicio3PNAA {
    public static void main(String[] args) {
        ArrayList<Integer> cola = new ArrayList<>();
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Introduce elementos en la cola (solo números del 1 al 9).");
            System.out.println("Para sacar un elemento de la cola, introduce el número 0.");


            while (true) {
                System.out.println("Introduce un número (1-9) o 0 para sacar un elemento:");
                int input = scanner.nextInt();
                if (input < 0 || input > 9) {
                    System.out.println("Número inválido. Introduce un número del 1 al 9.");
                    continue;
                }
                if (input == 0) {
                    if (!cola.isEmpty()) {
                        int removed = cola.remove(0);
                        System.out.println("Elemento sacado de la cola: " + removed);
                    } else {
                        System.out.println("La cola está vacía.");
                    }
                } else {
                    cola.add(input);
                    System.out.println("Elemento añadido a la cola: " + input);
                }
                mostrarCola(cola);
            }
        }
    }
    public static void mostrarCola(ArrayList<Integer> cola) {
        if (cola.isEmpty()) {
            System.out.println("La cola está vacía.");
        } else {
            System.out.print("Cola: ");
            for (int elemento : cola) {
                System.out.print(elemento + " ");
            }
            System.out.println();
        }
    }
}

