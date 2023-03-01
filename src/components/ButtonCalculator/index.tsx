import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import buttonCalculatorStyle from './style';

type Props = {
  children: React.ReactNode;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const ButtonCalculator: React.FC<Props> = ({
  children,
  buttonStyle,
  textStyle,
}) => (
  <TouchableOpacity style={[buttonCalculatorStyle.button, buttonStyle]}>
    <Text style={[buttonCalculatorStyle.buttonText, textStyle]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default ButtonCalculator;
