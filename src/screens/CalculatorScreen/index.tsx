import React from 'react';
import {View, Text} from 'react-native';
import ButtonCalculator from '../../components/ButtonCalculator';
import style from './style';

enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

const CalculatorScreen = () => {
  const operation = React.useRef<Operation>();
  const [previousNumber, setPreviousNumber] = React.useState('0');
  const [currentNumber, setCurrentNumber] = React.useState('0');

  const handlesetCurrentNumber = (text: string) => () => {
    if (text === '.' && currentNumber.includes('.')) {
      return;
    }
    const initialZero =
      currentNumber.startsWith('0') || currentNumber.startsWith('-0');
    if (initialZero && text === '0' && !currentNumber.includes('.')) {
      return;
    }
    if (initialZero && text === '.') {
      setCurrentNumber(prev => prev + text);
      return;
    }
    setCurrentNumber(prev => (prev === '0' ? text : prev + text));
  };

  const handleSetOperation = (value: Operation) => () => {
    operation.current = value;
    setCurrentNumber('0');
    if (currentNumber.endsWith('.')) {
      setPreviousNumber(currentNumber.slice(0, -1));
      return;
    }
    setPreviousNumber(currentNumber);
  };

  const handleClear = () => {
    setCurrentNumber('0');
    operation.current = undefined;
    setPreviousNumber('0');
  };

  const handleToggleSign = () => {
    setCurrentNumber(prev =>
      prev.includes('-') ? prev.replace('-', '') : '-' + prev,
    );
  };

  const handleDelete = () => {
    if (currentNumber.length === 1 || currentNumber.includes('-')) {
      setCurrentNumber('0');
      return;
    }
    setCurrentNumber(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    if (!previousNumber || !currentNumber || !operation.current) {
      return;
    }
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    switch (operation.current) {
      case Operation.ADD:
        setCurrentNumber((previous + current).toString());
        break;
      case Operation.SUBTRACT:
        setCurrentNumber((previous - current).toString());
        break;
      case Operation.MULTIPLY:
        setCurrentNumber((previous * current).toString());
        break;
      case Operation.DIVIDE:
        if (current === 0) {
          return;
        }
        setCurrentNumber((previous / current).toString());
        break;
      default:
        break;
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.operation}>{previousNumber}</Text>
      <Text style={style.result}>{currentNumber}</Text>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={handleClear}>
          AC
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={handleToggleSign}>
          +/-
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonPrimary}
          textStyle={style.buttonTextPrimary}
          onPress={handleDelete}>
          del
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={handleSetOperation(Operation.DIVIDE)}>
          ÷
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('7')}>
          7
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('8')}>
          8
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('9')}>
          9
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={handleSetOperation(Operation.MULTIPLY)}>
          x
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('4')}>
          4
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('5')}>
          5
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('6')}>
          6
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={handleSetOperation(Operation.SUBTRACT)}>
          -
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('1')}>
          1
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('2')}>
          2
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('3')}>
          3
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={handleSetOperation(Operation.ADD)}>
          +
        </ButtonCalculator>
      </View>
      <View style={style.row}>
        <ButtonCalculator
          buttonStyle={{...style.buttonLarge, ...style.buttonTertiary}}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('0')}>
          0
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonTertiary}
          textStyle={style.buttonTextSecondary}
          onPress={handlesetCurrentNumber('.')}>
          .
        </ButtonCalculator>
        <ButtonCalculator
          buttonStyle={style.buttonSecondary}
          textStyle={style.buttonTextSecondary}
          onPress={handleCalculate}>
          =
        </ButtonCalculator>
      </View>
    </View>
  );
};

export default CalculatorScreen;
