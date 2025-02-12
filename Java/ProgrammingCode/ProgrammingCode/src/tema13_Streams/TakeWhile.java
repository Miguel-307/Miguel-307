package tema13_Streams;

import java.util.stream.Stream;

public class TakeWhile {

	public void show() {

		Stream.of(9, 13, 15, 24, 37, 6)
	    .takeWhile(n -> n % 2 != 0)
	    .forEach(System.out::println);

	}

	public static void main(String[] args) {

		new TakeWhile().show();

	}

}
