package tema4_POO.recordsConstructorCanonico;

public record Point(int x, int y) {
	
	public Point {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be positive");
        }
    }	
	
}
