package Examen;
public class ejercicio3 {
    public static void main(String[] args) {
        /*Definimos las Variables*/
        StringBuilder Acarreo = new StringBuilder(" ");
        int Numero2;
        int j = 0;
        int Numero1;
        String a = "123";
        String b = "246";
        /*Pasamos las String a Int para hacer la suma*/
        int aInt = Integer.parseInt(a);
        int bInt = Integer.parseInt(b);
        /*Le damos valor a "c" y lo pasamos a String*/
        int c = (aInt+bInt);
        String cString = String.valueOf(c);
        /*Pasamos cada digito de a y b y los sumamos por separado,
        de forma que si da 10 se sume un "1" al acarreo*/
        for (int i = 0; i < a.length(); i++) {
            Numero1 = Character.getNumericValue(a.charAt(i));
            Numero2 = Character.getNumericValue(b.charAt(j));
            j++;
            if ((Numero1*Numero2)>=10) {
                Acarreo.append("1");
            }
        }
        /*Cedemos el valor del StringBuilder a una String*/
        String Acarreofinal = Acarreo.toString();
        /*enseñamos por pantalla el resultado*/
        System.out.println("  "+Acarreofinal);
        System.out.println("a:  "+a);
        System.out.println("b:  "+b);
        System.out.println("--------------------");
        System.out.println("c: "+cString);

    }
}
