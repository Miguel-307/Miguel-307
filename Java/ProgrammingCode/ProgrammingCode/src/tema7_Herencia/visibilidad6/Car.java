package tema7_Herencia.visibilidad6;

import tema7_Herencia.visibilidad1.Vehicle;

public class Car extends Vehicle {

	private double gasoline;

	public double getGasoline() {
		return gasoline;
	}

	public void refuel(double liters) {
		gasoline += liters;
	}

	@Override
	//Anula el método heredado cambiando el modificador de acceso de protected a public
	public void accelerate(double amount) {
		speed += amount;
	}

}
