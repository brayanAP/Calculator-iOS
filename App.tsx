import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import appTheme from './src/theme/appTheme';

const App = () => (
  <SafeAreaView style={appTheme.screen}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <CalculatorScreen />
  </SafeAreaView>
);

export default App;
