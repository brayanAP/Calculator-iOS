import {useRef, useState} from 'react';

export enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

const useCalculator = () => {
  const operation = useRef<Operation>();
  const [previousNumber, setPreviousNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');

  const changeCurrentNumber = (text: string) => () => {
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

  const changeOperation = (value: Operation) => () => {
    operation.current = value;
    setCurrentNumber('0');
    if (currentNumber.endsWith('.')) {
      setPreviousNumber(currentNumber.slice(0, -1));
      return;
    }
    setPreviousNumber(currentNumber);
  };

  const clear = () => {
    setCurrentNumber('0');
    operation.current = undefined;
    setPreviousNumber('0');
  };

  const toggleSign = () => {
    setCurrentNumber(prev =>
      prev.includes('-') ? prev.replace('-', '') : '-' + prev,
    );
  };

  const deleteLastNumber = () => {
    if (currentNumber.length === 1 || currentNumber.includes('-')) {
      setCurrentNumber('0');
      return;
    }
    setCurrentNumber(prev => prev.slice(0, -1));
  };

  const calculate = () => {
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

  return {
    currentNumber,
    previousNumber,
    changeCurrentNumber,
    changeOperation,
    clear,
    toggleSign,
    deleteLastNumber,
    calculate,
  };
};

export default useCalculator;
