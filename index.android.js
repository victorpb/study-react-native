/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './application/components/Text';
import CounterComponent from './application/components/Counter';
import InitRouter from './application/routers/InitRouter'
export default class schooOfNetReactNative extends Component {
  render() {

    return (
      <InitRouter />
    )
  }
}

const SYTLES = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('schooOfNetReactNative', () => schooOfNetReactNative);
