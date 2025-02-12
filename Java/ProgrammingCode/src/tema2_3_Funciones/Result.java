package tema2_3_Funciones;

import static tema1_3_EscrituraEnPantalla.colores.Colors.RED;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RESET;

import java.util.Scanner;

public class Result {
	
	@SuppressWarnings("resource")
	public void show() {
		
		Scanner keyboard = new Scanner(System.in);
		String string, stringRed;

		System.out.print("Introduce una cadena: ");
		string = keyboard.nextLine();
		/*
		 * En la llamada a la función turnRed,
		 * no estamos utilizando el valor devuelto:
		 */
		turnRed(string);
		
		//En la siguiente llamada sí lo vamos a utilizar:
		stringRed = turnRed(string);
		System.out.printf("La cadena \"%s\" convertida a rojo: %s", string, stringRed);		
		
	}
	
	public String turnRed(String string) {

		return String.format("%s", RED + string + RESET);

	}

	public static void main(String[] args) {

		new Result().show();
		
	}
	
}
