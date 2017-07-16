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
                    Hello this is my about page
                    {this.props.data}
                </Text>

                <Button 
                    title = 'Go to about' 
                    onPress={this.goToMyHomePage}>
                </Button>

            </View>
        );
    }
    goToMyHomePage = () => {
        this.props.navigator.push({
            name: 'Home',
            title: 'Home Page',
            passProps: {
                data: 'This is my data from about page'
            }
        })
    }
}