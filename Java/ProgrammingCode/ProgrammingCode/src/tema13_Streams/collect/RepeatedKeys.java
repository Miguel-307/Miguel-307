package tema13_Streams.collect;

import java.util.Arrays;
import java.util.stream.Collectors;

public class RepeatedKeys {

	public void show() {

		Vehicle vehicles[] = new Vehicle[6];
		vehicles[0] = new Vehicle("9685KMX", 4, "azul");
		vehicles[1] = new Vehicle("1235GTR", 2, "rojo");
		vehicles[2] = new Vehicle("7314QWE", 4, "verde");
		vehicles[3] = new Vehicle("5930POI", 2, "rojo");
		vehicles[4] = new Vehicle("1705UBG", 4, "blanco");
		vehicles[5] = new Vehicle("3495JZA", 2, "azul");
		Arrays.stream(vehicles)
			  .collect(Collectors.toMap(Vehicle::getColour, Vehicle::getRegistration))
			  .forEach((k, v) -> System.out.printf("Clave:%s Valor:%s\n", k, v));
		
	}

	public static void main(String[] args) {

		new RepeatedKeys().show();

	}

}
