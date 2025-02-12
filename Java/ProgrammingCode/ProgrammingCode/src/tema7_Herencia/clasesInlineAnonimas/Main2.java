package tema7_Herencia.clasesInlineAnonimas;

import static tema1_3_EscrituraEnPantalla.colores.Colors.BLUE;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RED;
import static tema1_3_EscrituraEnPantalla.colores.Colors.RESET;

public class Main2 {

	public void showAnonymousInnerClass() {

		new Message() {
			@Override
			public void showMessage() {
				System.out.println(RED + "Clases inline anónimas" + RESET);
			}
		}.showMessage();

		new Message() {
			@Override
			public void showMessage() {
				System.out.println(BLUE + "Clases inline anónimas" + RESET);
			}
		}.showMessage();

	}

	public static void main(String[] args) {

		new Main2().showAnonymousInnerClass();

	}

}
