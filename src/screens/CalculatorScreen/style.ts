import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  operation: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: '#9B9B9B',
  },
  buttonTextPrimary: {
    color: 'black',
  },
  buttonTextSecondary: {
    color: 'white',
  },
  buttonSecondary: {
    backgroundColor: '#FF9427',
  },
  buttonTertiary: {
    backgroundColor: '#2D2D2D',
  },
  buttonLarge: {
    width: 180,
  },
});
