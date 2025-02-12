package tema1_3_EscrituraEnPantalla.colores;

import static tema1_3_EscrituraEnPantalla.colores.Colors.BOLD;
import static tema1_3_EscrituraEnPantalla.colores.Colors.CYAN;
import static tema1_3_EscrituraEnPantalla.colores.Colors.GREEN;
import static tema1_3_EscrituraEnPantalla.colores.Colors.GREEN_BACKGROUND;
import static tema1_3_EscrituraEnPantalla.colores.Colors.PURPLE_BACKGROUND;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RED;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RED_BACKGROUND;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RESET;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RESET_TEXT;
import static tema1_3_EscrituraEnPantalla.colores.Colors.REVERSED;
import static tema1_3_EscrituraEnPantalla.colores.Colors.UNDERLINE;
import static tema1_3_EscrituraEnPantalla.colores.Colors.WHITE_BACKGROUND;
import static tema1_3_EscrituraEnPantalla.colores.Colors.YELLOW;

public class ColorsUse {

	public void show() {
		
		String[] colorNames = {
	            "Negro", "Rojo", "Verde", "Amarillo", "Azul", "Magenta", "Cian", "Blanco",
	            "Negro brillante", "Rojo brillante", "Verde brillante", "Amarillo brillante", 
	            "Azul brillante", "Magenta brillante", "Cian brillante", "Blanco brillante"};
		

		//El primer RESET sirve por si ejecutamos más de una vez		
		System.out.printf("%s%s%s\n", RESET, RED, "Este texto es de color rojo");
		System.out.printf("%s%s\n", RESET_TEXT, "Volvemos al color del texto por defecto");
		System.out.printf("%s%s\n", GREEN, "...y ahora es verde");
		System.out.printf("%s%s\n", PURPLE_BACKGROUND, "Fondo morado");
		System.out.printf("%s%s%s\n", CYAN, WHITE_BACKGROUND, "Fondo blanco con texto celeste");
		System.out.printf("%s%s%s%s\n", CYAN, WHITE_BACKGROUND, BOLD, "Fondo blanco con texto celeste en negrita");
		System.out.printf("%s%s%s%s\n", CYAN, WHITE_BACKGROUND, UNDERLINE, "Fondo blanco con texto celeste subrayado");
		System.out.printf("%s%s\n", RESET_TEXT,
				"Volvemos al color del texto por defecto y se mantiene el fondo como estaba");
		System.out.printf("%s%s%c\n", YELLOW, RED_BACKGROUND, (char) 9733);// Estrella
		System.out.printf("%s%s%s\n", YELLOW, GREEN_BACKGROUND, "Fondo verde con texto amarillo");
		System.out.printf("%s%s\n", REVERSED, "Fondo amarillo con texto verde usando REVERSED");
		System.out.printf("%s%s\n\n", RESET, "Volvemos al color del texto y del fondo por defecto");
		
	    for (int i = 0; i < 8; i++) {
            System.out.printf("\u001B[3%dmEste es el color %s%s\n",i,colorNames[i],RESET);
        }
	    
	    for (int i = 0; i < 8; i++) {
            System.out.printf("\u001B[9%dmEste es el color %s brillante%s\n",i,colorNames[i],RESET);
        }

	}

	public static void main(String[] args) {
		
		new ColorsUse().show();

	}
	
}
