package tema12_ProgramacionFuncional.binaryOperator;

public class Main2 {

	public void show() {
		ShowBinaryOperator binOper = new ShowBinaryOperator();
		System.out.printf("12 + 6 = %d\n", binOper.calculate(12, 6, (v, n) -> v + n));
		System.out.printf("12 - 6 = %d\n", binOper.calculate(12, 6, (t, u) -> t - u));
		System.out.printf("12 / 6 = %d\n", binOper.calculate(12, 6, (t, u) -> t / u));
		System.out.printf("12 * 6 = %d\n", binOper.calculate(12, 6, (t, u) -> t * u));
		System.out.printf("Resto de 8 y 5 = %d",binOper.calculate(8, 5, (t, u)->t%u));
	}

	public static void main(String[] args) {

		new Main2().show();

	}

}
