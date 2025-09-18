import java.util.ArrayList;
import java.util.Scanner;

public class Ejercicioo4PNA {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresa una palabra:");
        String palabra = scanner.nextLine();
        ArrayList<Character> caracteres = new ArrayList<>();

        for (char c : palabra.toCharArray()) {caracteres.add(c);}
        
        boolean esPalindromo = true;
        int i = 0;
        int j = caracteres.size() - 1;
        while (i < j) {
            if (caracteres.get(i) != caracteres.get(j)) {
                esPalindromo = false;
            }
            i++;
            j--;
        }
        
        if (esPalindromo) {System.out.println("La palabra ingresada es un palíndromo.");} 
        else {System.out.println("La palabra ingresada no es un palíndromo.");}
        scanner.close();
    }
}