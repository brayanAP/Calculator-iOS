import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import buttonCalculatorStyle from './style';

type Props = {
  children: React.ReactNode;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
};

const ButtonCalculator: React.FC<Props> = ({
  children,
  buttonStyle,
  textStyle,
  onPress,
}) => (
  <TouchableOpacity
    style={[buttonCalculatorStyle.button, buttonStyle]}
    onPress={onPress}>
    <Text style={[buttonCalculatorStyle.buttonText, textStyle]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default ButtonCalculator;
