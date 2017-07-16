import React, { Component } from 'react';
import { Text, Button, View, Alert, StyleSheet } from 'react-native';
import STYLES from '../styles/Counter.styles'
export default class CounterComponent extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        };
    };

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })

        Alert.alert(
            'My title ',
            this.state.counter.toString())
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })

        Alert.alert(
            'My title ',
            this.state.counter.toString())
    }

    render() {
        return (
            <View>
                <Text style={STYLES.textCounter}>
                    {this.state.counter}
                </Text>
                <Button 
                    title="Inc" 
                    onPress={this.increment}
                    color='#F44336'></Button>
                <Button title="Desc" onPress={this.decrement}></Button>
            </View>
        )
    }
}
