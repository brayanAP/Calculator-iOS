import React from 'react';
import {View, Text} from 'react-native';
import ButtonCalculator from '../../components/ButtonCalculator';
import style from './style';

const CalculatorScreen = () => (
  <View style={style.container}>
    <Text style={style.operation}>1,5000</Text>
    <Text style={style.result}>1,5000</Text>
    <View style={style.row}>
      <ButtonCalculator
        buttonStyle={style.buttonPrimary}
        textStyle={style.buttonTextPrimary}>
        AC
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonPrimary}
        textStyle={style.buttonTextPrimary}>
        +/-
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonPrimary}
        textStyle={style.buttonTextPrimary}>
        %
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonSecondary}
        textStyle={style.buttonTextSecondary}>
        ÷
      </ButtonCalculator>
    </View>
    <View style={style.row}>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        7
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        8
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        9
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonSecondary}
        textStyle={style.buttonTextSecondary}>
        x
      </ButtonCalculator>
    </View>
    <View style={style.row}>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        4
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        5
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        6
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonSecondary}
        textStyle={style.buttonTextSecondary}>
        -
      </ButtonCalculator>
    </View>
    <View style={style.row}>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        1
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        2
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        3
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonSecondary}
        textStyle={style.buttonTextSecondary}>
        +
      </ButtonCalculator>
    </View>
    <View style={style.row}>
      <ButtonCalculator
        buttonStyle={{...style.buttonLarge, ...style.buttonTertiary}}
        textStyle={style.buttonTextSecondary}>
        0
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonTertiary}
        textStyle={style.buttonTextSecondary}>
        .
      </ButtonCalculator>
      <ButtonCalculator
        buttonStyle={style.buttonSecondary}
        textStyle={style.buttonTextSecondary}>
        =
      </ButtonCalculator>
    </View>
  </View>
);

export default CalculatorScreen;
