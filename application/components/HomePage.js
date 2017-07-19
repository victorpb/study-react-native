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
                <Button title = 'Go to TaskList' onPress={this.goToMyTaskList}> </Button>
                <Button title = 'Fetch' onPress={this.goToMyFetchPage}> </Button>
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

    goToMyTaskList = () => {
        this.props.navigator.push({
            name: 'TaskList',
            title: 'My Task list',
            passProps: {}
        })
    }

    goToMyFetchPage = () => {
        this.props.navigator.push({
            name: 'HTTP',
            title: 'Fetch',
            passProps: {}
        })
    }
}