package tema4_POO.thisConstructor;

public class Vehicle {

	private int wheelCount;
	private double speed;
	private String colour;

	public Vehicle() { //Constructor por defecto

		this(4, "blanco");
		/*Llama al constructor con parámetros. Esta llamada se tiene 
		que hacer en la primera línea de código*/
	}

	public Vehicle(int wheelCount, String colour) { //Constructor con parámetros
		this.wheelCount = wheelCount;
		this.colour = colour;
		speed = 0;
	}

	public int getWheelCount() {
		return wheelCount;
	}

	public double getSpeed() {
		return speed;
	}

	public String getColour() {
		return colour;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

	public void accelerate(double amount) {
		speed += amount;
	}

	public void brake(double amount) {
		speed -= amount;
	}

}