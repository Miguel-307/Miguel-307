package tema9_Fechas;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ClassDateTimeFormatter {

	public void show() {

		LocalDateTime localDateTime;
		LocalDate localDate = LocalDate.of(2023, 7, 9);
		LocalDate localDateEra = LocalDate.of(1, 1, 1);//1 de enero del año 1

		//Formato predefinido ISO_ORDINAL_DATE: año y día del año
		DateTimeFormatter formatter = DateTimeFormatter.ISO_ORDINAL_DATE;
		System.out.printf("Formato predefinido ISO_ORDINAL_DATE: %s", formatter.format(localDate));
		
		//Creación de patrones basados en secuencia de letras y símbolos
		formatter = DateTimeFormatter.ofPattern("G d M y");
		System.out.printf("\n\nPatrón \"%s\": %s", "G d M y", formatter.format(localDate));
		formatter = DateTimeFormatter.ofPattern("GG d/MM/yy");
		System.out.printf("\nPatrón \"%s\": %s", "GG d/MM/yy", formatter.format(localDate));
		formatter = DateTimeFormatter.ofPattern("GGG d MMM yyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGG d MMM yyy", formatter.format(localDate));
		formatter = DateTimeFormatter.ofPattern("GGGG dd-MMMM-yyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd-MMMM-yyyy", formatter.format(localDate));
		formatter = DateTimeFormatter.ofPattern("GGGGG dd-MMMMM-yyyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGGG dd-MMMMM-yyyyy", formatter.format(localDate));
		
		
		//Era CE
		System.out.print("\n\nAño 1 d.C:");
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/uuuu");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/uuuu", formatter.format(localDateEra));
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/yyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/yyyy", formatter.format(localDateEra));
		//Era BCE
		localDateEra = localDateEra.minusYears(1);
		System.out.print("\n\nAño 1 a.C:");
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/uuuu");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/uuuu", formatter.format(localDateEra));
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/yyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/yyyy", formatter.format(localDateEra));
		localDateEra = localDateEra.minusYears(1);
		System.out.print("\n\nAño 2 a.C:");
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/uuuu");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/uuuu", formatter.format(localDateEra));
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/yyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/yyyy", formatter.format(localDateEra));
		localDateEra = localDateEra.minusYears(1);
		System.out.print("\n\nAño 3 a.C:");
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/uuuu");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/uuuu", formatter.format(localDateEra));
		formatter = DateTimeFormatter.ofPattern("GGGG dd/MM/yyyy");
		System.out.printf("\nPatrón \"%s\": %s", "GGGG dd/MM/yyyy", formatter.format(localDateEra));

		//Uso de método parse con formato
		formatter = DateTimeFormatter.ofPattern("d MMMM yy HH:mm:ss");
		localDateTime = LocalDateTime.parse("7 febrero 22 10:01:30", formatter);
		System.out.printf("\n\nFecha y hora obtenida a partir de una cadena y un formato: %s", localDateTime);

	}

	public static void main(String[] args) {

		new ClassDateTimeFormatter().show();

	}

}
