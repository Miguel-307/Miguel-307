package tema12_ProgramacionFuncional.binaryOperator;

import java.util.function.BinaryOperator;

public class ShowBinaryOperator{

	public Integer calculate(int value1,int value2,BinaryOperator<Integer> binaryOperation) {
		return binaryOperation.apply(value1,value2);
	}

}
