package tema1_4_LecturaPorTeclado;

import java.util.Scanner;

public class Next2 {
	
	@SuppressWarnings("resource")
	public void show() {
		
		// Para Linux y Mac:
		//Scanner keyboard = new Scanner(System.in).useDelimiter("\\n");
		// Para Windows:
		Scanner keyboard = new Scanner(System.in).useDelimiter("\\r\\n");
		String string;
		int number;

		System.out.println("Introduzca un número entero: ");
		number = keyboard.nextInt();
		System.out.println(number);
		System.out.println("Introduzca una cadena: ");
		string = keyboard.next();
		System.out.println(string);		
		
	}
	
	public static void main(String[] args) {

		new Next2().show();

	}

}
