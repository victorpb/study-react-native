import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomePage extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <Text>
                    Hello this is my home page
                    {this.props.data}
                </Text>
                <Button title = 'Go to about' onPress={this.goToMyAboutPage}> </Button>
            </View>
        );
    }

    goToMyAboutPage = () => {
        this.props.navigator.push({
            name: 'About',
            title: 'About',
            passProps: {
                data: 'This is my data from home page'
            }
        })
    }
}