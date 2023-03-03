import React from 'react';
import {View, Text} from 'react-native';
import ButtonCalculator from '../../components/ButtonCalculator';
import useCalculator, {Operation} from '../../hooks/useCalculator';
import style from './style';

const CalculatorScreen = () => {
  const {
    previousNumber,
    currentNumber,
    changeCurrentNumber,
    changeOperation,
    calculate,
    deleteLastNumber,
    toggleSign,
    clear,
  } = useCalculator();
  return (
    <View style={style.container}>
      <Text style={style.operation}>{previousNumber}</Text>
      <Text style={style.result}>{currentNumber}</Text>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={clear}>
          AC
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={toggleSign}>
          +/-
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={deleteLastNumber}>
          del
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={changeOperation(Operation.DIVIDE)}>
          ÷
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('7')}>
          7
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('8')}>
          8
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('9')}>
          9
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={changeOperation(Operation.MULTIPLY)}>
          x
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('4')}>
          4
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('5')}>
          5
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('6')}>
          6
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={changeOperation(Operation.SUBTRACT)}>
          -
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('1')}>
          1
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('2')}>
          2
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('3')}>
          3
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={changeOperation(Operation.ADD)}>
          +
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={{...style.buttonLarge, ...style.buttonTertiary}}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('0')}>
          0
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={changeCurrentNumber('.')}>
          .
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={calculate}>
          =
        </ButtonCalculator>
      </View>
    </View>
  );
};

export default CalculatorScreen;
