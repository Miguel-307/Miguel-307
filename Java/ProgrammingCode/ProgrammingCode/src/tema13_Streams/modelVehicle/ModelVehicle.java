package tema13_Streams.modelVehicle;

import java.util.List;

public class ModelVehicle{

	private String model;
	private int wheelCount;
	private List<String> colours;

	public ModelVehicle(String model, int wheelCount, List<String> colours) {
		this.model = model;
		this.wheelCount = wheelCount;
		this.colours = colours;
	}
	
	public String getModel() {
		return model;
	}

	public int getWheelCount() {
		return wheelCount;
	}

	public List<String> getColours() {
		return colours;
	}

	@Override
	public String toString() {
		String result = String.format("Modelo: %s Número de ruedas: %d Colores: ", model, wheelCount);
		for(int i=0;i<colours.size();i++) {
			if(i==0) {
				result = result.concat(String.format("%s",colours.get(i)));
			}
			else {
				result = result.concat(String.format(", %s",colours.get(i)));
			}
		}
		return result;
		
	}

}