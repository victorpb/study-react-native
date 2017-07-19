import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

export default class FetchPage extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }

        fetch('https://www.w3schools.com/angular/customers.php', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson.records
            })
        })
        .catch(error => {
            Alert.alert('Error!!', error)
        })
    }

    render (){
        return(
            <View>
                {
                    this.state.data.map((item, key) => (
                        <Text key={key}> {item.Country} </Text>
                    ))
                    }
            </View>
        )
    }
}