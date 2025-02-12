package tema1_3_EscrituraEnPantalla.colores;

import static tema1_3_EscrituraEnPantalla.colores.Colors.RESET_TEXT; 

public class RGBColors {

	public void show() {

		final String RGB_MODE = "\u001B[38;2;"; 
		final String ESCAPED_RGB_MODE = "\\u001B[38;2;";
		final char blockCharacter='\u2588';
		String sequence;
		for (int i = 0; i <= 2; i++) {
			switch (i) {
				case 0 -> {
					System.out.println("Rojo:");
					for (int j = 0; j <= 255; j++) {
						sequence = String.format("%s%d%s", ESCAPED_RGB_MODE, j, ";0;0m");
						System.out.printf("%-22s: %s%d%s%c\n", sequence, RGB_MODE, j, ";0;0m",blockCharacter);
					}
				}
				case 1 -> {
					System.out.printf("%sVerde:\n",RESET_TEXT);
					for (int j = 0; j <= 255; j++) {
						sequence = String.format("%s%s%d%s", ESCAPED_RGB_MODE, "0;", j, ";0m");
						System.out.printf("%-22s: %s%s%d%s%c\n", sequence, RGB_MODE, "0;", j, ";0m",blockCharacter);
					}
				}
				case 2 -> {
					System.out.printf("%sAzul:\n",RESET_TEXT);
					for (int j = 0; j <= 255; j++) {
						sequence = String.format("%s%s%d%s", ESCAPED_RGB_MODE, "0;0;", j, "m");
						System.out.printf("%-22s: %s%s%d%s%c\n", sequence, RGB_MODE, "0;0;", j, "m",blockCharacter);
					}
				}
				default -> {
					System.out.println("Color erróneo");
				}
			};
			
		}

	}

	public static void main(String[] args) {

		new RGBColors().show();

	}

}