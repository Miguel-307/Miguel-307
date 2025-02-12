package tema12_ProgramacionFuncional;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class LambdaExpression {

	public void show() {

		List<Integer> list = Arrays.asList(3, 2, 6, 1, 5, 4);
		list.sort(new Comparator<Integer>() {//Clase inline anónima
			@Override
			public int compare(Integer o1, Integer o2) {
				return Integer.compare(o1, o2);
			}
		});
		for (Integer i : list) {// 1  2  3  4  5  6
			System.out.printf(" %d ", i);

		}
		System.out.println();
		list.sort((o1, o2) -> Integer.compare(o1, o2));//Expresión lambda
		for (Integer i : list) {// 1  2  3  4  5  6
			System.out.printf(" %d ", i);

		}

	}

	public static void main(String[] args) {

		new LambdaExpression().show();

	}

}
