package tema2_3_Funciones;

public class Factorial2 {
	
	public void show() {
		
		int result;

		result = factorial(-5);//No tiene mucho sentido porque el factorial se aplica a números positivos
		System.out.printf("El factorial de %d es %d\n", -5, result);		
		
	}

	public int factorial(int n) {

		int result = 1;

		for (int i = 2; i <= n; i++) {
			result *= i;
		}

		return result;
	}
	
	public static void main(String[] args) {

		new Factorial2().show();

	}

}
