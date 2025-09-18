package tema7_Herencia.interfaces;

public class Main4 {

	public void showInterfaces() {

		Vehicle vehicle[] = new Vehicle[3];
		ActionsVehicle actionsVehicle[];

		vehicle[0] = new Vehicle(2, "azul");
		vehicle[1] = new Vehicle(4, "rojo");
		vehicle[2] = new Vehicle(4, "blanco");
		for(int i=0;i<vehicle.length;i++) {
			System.out.printf("La velocidad del vehículo es %.2f km/h\n", vehicle[i].getSpeed());
		}		
		//Casting entre arrays clase-interfaz:
		actionsVehicle = (ActionsVehicle[]) vehicle;
		for(int i=0;i<vehicle.length;i++) {
			actionsVehicle[i].accelerate(i*40);
		}		
		for(int i=0;i<vehicle.length;i++) {
			System.out.printf("La velocidad del vehículo es %.2f km/h\n", vehicle[i].getSpeed());
		}		

	}

	public static void main(String[] args) {

		new Main4().showInterfaces();

	}

}
