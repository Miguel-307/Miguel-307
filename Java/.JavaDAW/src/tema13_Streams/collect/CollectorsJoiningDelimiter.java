package tema13_Streams.collect;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CollectorsJoiningDelimiter {

	public void show() {
		
		String result = Stream.of("Juan", "Pepe", "Luis", "Ricardo", "Laura")
					    .collect(Collectors.joining(" - "));
		System.out.println(result);

	}

	public static void main(String[] args) {

		new CollectorsJoiningDelimiter().show();

	}

}