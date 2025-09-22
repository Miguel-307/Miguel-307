var edad;
edad = 38; // Ya que no estamos obligados a declarar la variable
var altura, peso, edad; // Para declarar más de una variable.
 // pueden tener notación científica
 var numCientifico = 2.9e3;
 var otroNumCientifico = 2e-3;
  var miCadena = "Hola! esto es una cadena!";
   var otraCadena = "2323232323"; //parece un numérico pero es cadena
   var sumaCadenaConcatenacion = otraCadena + cadenaNum;
    // tipos de datos booleano

 var miBooleano = true;
 var falso = false;


 if (niBooleano){
 //alert ("era true");
 }
 else{
 //alert("era false");
 }

  //arrays
 var miArray = (2,5,7);
 //objetos
 var miObjeto = {
 propiedad: 23,
 otracosa: "hola"
 }
 //operador typeof para conocer un tipo
 alert("El tipo de miEntero es: " + typeof(miEntero));
 alert("El tipo de miCadena es: " + typeof(miCadena));
 alert("El tipo de miEntero es: " + typeof(miBooleano));
 alert("El tipo de miEntero es: " + typeof(miArray));
 alert("El tipo de miEntero es: " + typeof(miObjeto));


 4 + 5 + "6" // resultado = "96"

 parseInt("34") // resultado = 34
parseInt("89.76") // resultado = 89
//parseFloat devolverá un entero o un número real según el caso:
parseFloat("34") // resultado = 34
parseFloat("89.76") // resultado = 89.76
4 + 5 + parseInt("6") // resultado = 15


("" + 3400) // resultado = "3400"
("" + 3400).length // resultado = 4

//Arrays de literales
cafés = ["Tueste francés", "Colombiano", "Kona"]


//Literales de objetos
var Ventas = "Toyota";
function TipoAuto(nombre)
{
 if(nombre == "Honda")
 return nombre;
 else
 return "Lo siento, no vendemos " + nombre + ".";
}

automovil = {miAuto: "Saturn", obtenerAuto: TipoAuto("Honda"),
especial: Ventas}
document.write(automovil.miAuto); // Saturn
document.write(automovil.obtenerAuto); // Honda
document.write(automovil.especial); // Toyota


//Caracteres de escape.
var texto = "El lee \"La Incineración de Sam McGee\" de R.W. Service."
document.write(texto)


//PARA ASIGNAR UNA RUTA 
var home = "c:\\temp"

//tambien se pueden comparar las cadenas 
"Marta" == "Marta" // true
"Marta" == "marta" // false
"Marta" > "marta" // false
"Mark" < "Marta" // true


//operadores aritmeticos
var a = 10; // Inicializamos a al valor 10
var z = 0; // Inicializamos z al valor 0
z = a; // a es igual a 10, por lo tanto z es igual a 10.
z = ++a; // el valor de a se incrementa justo antes de ser asignado a
 //z, por lo que a es 11 y z valdrá 11.
z = a++; // se asigna el valor de a (11) a z y luego se incrementa el
 //valor de a (pasa a ser 12).
z = a++; // a vale 12 antes de la asignación, por lo que z es igual a
 //12; una vez hecha la asignación a valdrá 13.


//operadores aritmeticos
 !true // resultado = false
!(10 > 5) // resultado = false
!(10 < 5) // resultado = true
!("gato" == "pato") // resultado = true
FJCM
17
5 > 1 && 50 > 10 // resultado = true
5 > 1 && 50 < 10 // resultado = false
5 < 1 && 50 > 10 // resultado = false
5 < 1 && 50 < 10 // resultado = false