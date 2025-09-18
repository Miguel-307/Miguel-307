public class Ejercicio1lalala {
    public static void main(String[] args) {
        int[] array = {2, 4, 6, 8, 1, 3};
        ordenarDeMayorAMenor(array);
        System.out.println("Array ordenado de mayor a menor:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void ordenarDeMayorAMenor(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            int indiceMaximo = i;
            for (int j = i + 1; j < array.length; j++) {
                if (array[j] > array[indiceMaximo]) {
                    indiceMaximo = j;
                }
            }
            int temp = array[indiceMaximo];
            array[indiceMaximo] = array[i];
            array[i] = temp;
        }
    }
}