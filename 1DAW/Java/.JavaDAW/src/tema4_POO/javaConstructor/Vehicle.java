package tema4_POO.javaConstructor;

public class Vehicle { //Clase sin constructor. Java crea un constructor por defecto

	private int wheelCount;
	private double speed;
	private String colour;

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