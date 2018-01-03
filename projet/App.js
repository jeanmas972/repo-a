import React from 'react';
import { AppRegistry, View , Text, StyleSheet, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens/';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  render() {
    return <HomeScreen />
  }
  
}

AppRegistry.registerComponent('App', () => App);
