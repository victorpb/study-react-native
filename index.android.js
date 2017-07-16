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

export default class schooOfNetReactNative extends Component {
  render() {
    return (
      <View style={SYTLES.view}>
             <TextComponent MyText= "Hello world"> </TextComponent>
             <CounterComponent></CounterComponent>
      </View>
    );
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
