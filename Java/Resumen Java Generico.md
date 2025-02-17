
# Todo lo que necesitas saber sobre Java

## 1. Introducción a Java
- **Java** es un lenguaje de programación orientado a objetos, desarrollado por Sun Microsystems en 1995 y ahora propiedad de Oracle.
- **Plataforma independiente**: Escribir una vez, ejecutar en cualquier lugar (WORA). Esto se logra gracias a la **JVM (Java Virtual Machine)**.
- **JDK (Java Development Kit)**: Conjunto de herramientas para desarrollar aplicaciones Java, que incluye el compilador (`javac`), el entorno de ejecución (`java`), y bibliotecas estándar.
- **JRE (Java Runtime Environment)**: Entorno necesario para ejecutar aplicaciones Java, pero no incluye las herramientas de desarrollo como el JDK.

## 2. Sintaxis Básica

### Estructura básica de un programa Java
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola, Mundo!");
    }
}
```

### Tipos de datos
- **Primitivos**:
  - `int`, `long`, `float`, `double`, `char`, `boolean`, `byte`, `short`
- **Referenciados**:
  - **String** (cadena de texto)
  - **Arrays**
  - **Clases, interfaces y enumeraciones**

### Declaración de variables
```java
int numero = 10;
String nombre = "Miguel";
boolean esActivo = true;
```

### Operadores
- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Relacionales**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Lógicos**: `&&`, `||`, `!`
- **Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`  
- **Incremento/Decremento**: `++`, `--`

## 3. Control de Flujo

### Condicionales
```java
if (condicion) {
    // Acción si la condición es verdadera
} else {
    // Acción si la condición es falsa
}
```
- `if`, `else if`, `else`
- `switch` (para comparaciones múltiples)

### Bucles
- **for**: Repite un bloque de código un número específico de veces
  ```java
  for (int i = 0; i < 10; i++) {
      System.out.println(i);
  }
  ```
- **while**: Ejecuta mientras la condición sea verdadera
  ```java
  while (condicion) {
      // Acción
  }
  ```
- **do-while**: Ejecuta al menos una vez, luego repite mientras la condición sea verdadera
  ```java
  do {
      // Acción
  } while (condicion);
  ```

### Control de bucles
- **`break`**: Sale del bucle
- **`continue`**: Omite la iteración actual y pasa a la siguiente

## 4. Métodos

### Definición de un método
```java
public static void miMetodo() {
    System.out.println("Ejecutando mi método");
}
```

- **Tipos de retorno**: Puede ser cualquier tipo (primitivo, objeto, `void` si no retorna nada).
- **Parámetros**: Puedes pasar argumentos a los métodos.

### Sobrecarga de métodos
Es posible tener varios métodos con el mismo nombre, pero con diferentes tipos o número de parámetros.

```java
public int sumar(int a, int b) {
    return a + b;
}

public double sumar(double a, double b) {
    return a + b;
}
```

## 5. Clases y Objetos

### Declaración de clases
```java
public class Persona {
    String nombre;
    int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public void mostrarInformacion() {
        System.out.println(nombre + " tiene " + edad + " años.");
    }
}
```

### Crear objetos
```java
Persona persona1 = new Persona("Miguel", 25);
persona1.mostrarInformacion();
```

### Encapsulamiento (Acceso a atributos)
Utiliza modificadores de acceso como `public`, `private`, `protected`:
```java
public class Persona {
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

## 6. Herencia y Polimorfismo

### Herencia
La herencia permite a una clase heredar propiedades y métodos de otra clase.
```java
public class Animal {
    public void dormir() {
        System.out.println("Durmiendo...");
    }
}

public class Perro extends Animal {
    public void ladrar() {
        System.out.println("¡Guau!");
    }
}
```

### Polimorfismo
El polimorfismo permite usar un objeto de una clase derivada como si fuera un objeto de la clase base.
```java
Animal a = new Perro();
a.dormir();  // Usando el método de la clase base
```

## 7. Interfaces y Clases Abstractas

### Interface
Una **interfaz** define un conjunto de métodos que una clase debe implementar.
```java
public interface Animal {
    void hacerSonido();
}

public class Perro implements Animal {
    public void hacerSonido() {
        System.out.println("Guau");
    }
}
```

### Clase abstracta
Una **clase abstracta** puede tener métodos implementados y métodos abstractos (sin implementación).
```java
public abstract class Animal {
    public abstract void hacerSonido();
}

public class Perro extends Animal {
    public void hacerSonido() {
        System.out.println("Guau");
    }
}
```

## 8. Excepciones

### Manejo de excepciones
- **`try-catch`**: Captura excepciones durante la ejecución del código.
```java
try {
    int division = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: División por cero");
}
```

### Propagación de excepciones
- **`throws`**: Indica que un método puede lanzar una excepción.
```java
public void metodo() throws IOException {
    // Código que puede lanzar una excepción
}
```

### Creación de excepciones personalizadas
```java
public class MiExcepcion extends Exception {
    public MiExcepcion(String mensaje) {
        super(mensaje);
    }
}
```

## 9. Colecciones

### Listas
- **ArrayList**: Implementación más común de una lista dinámica.
```java
ArrayList<String> lista = new ArrayList<>();
lista.add("Java");
lista.add("Python");
```

### Conjuntos
- **HashSet**: Colección sin elementos duplicados.
```java
Set<String> conjunto = new HashSet<>();
conjunto.add("Java");
conjunto.add("Python");
```

### Mapas
- **HashMap**: Estructura clave-valor.
```java
Map<String, String> mapa = new HashMap<>();
mapa.put("clave1", "valor1");
mapa.put("clave2", "valor2");
```

## 10. Hilos (Threads)

### Crear un hilo
```java
public class MiHilo extends Thread {
    public void run() {
        System.out.println("Hilo en ejecución");
    }
}

MiHilo hilo = new MiHilo();
hilo.start();
```

### Usando la interfaz `Runnable`
```java
public class MiHilo implements Runnable {
    public void run() {
        System.out.println("Hilo en ejecución");
    }
}

Thread hilo = new Thread(new MiHilo());
hilo.start();
```

## 11. Java 8 y más allá

### Lambdas y Streams (Java 8)
Las expresiones lambda y las Streams permiten trabajar con colecciones de manera más funcional.
```java
List<String> lista = Arrays.asList("Java", "Python", "C++");
lista.forEach(e -> System.out.println(e));
```

### Métodos predicados y funcionales
```java
List<String> lista = Arrays.asList("Java", "Python", "C++");
lista.stream().filter(s -> s.startsWith("J")).forEach(System.out::println);
```

## 12. Otras características

### Modificadores de acceso
- `public`: Accesible desde cualquier clase.
- `private`: Solo accesible dentro de la clase.
- `protected`: Accesible dentro del paquete y por las subclases.
- `default`: Accesible solo dentro del paquete.

### Clases y métodos estáticos
Un método o atributo estático pertenece a la clase, no a las instancias.
```java
public class MiClase {
    static int contador = 0;

    public static void incrementar() {
        contador++;
    }
}
```

## 13. Bibliotecas comunes

- **java.util**: Colecciones, fechas, calendarios, etc.
- **java.io**: Entrada y salida de datos (archivos, streams).
- **java.nio**: Entrada/salida no bloqueante y trabajo con archivos.
- **java.net**: Trabajar con redes (sockets, HTTP).
- **java.sql**: Conectar y trabajar con bases de datos (JDBC).
