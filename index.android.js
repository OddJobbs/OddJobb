/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import App from './src/app.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class OddJobb extends Component {
  render() {
    return (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OddJobb', () => OddJobb);
