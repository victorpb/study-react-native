import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ListView, } from 'react-native';

import LsView from './LsView'

export default class TaskList extends Component {
    constructor() {
        super();

         this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })

        this.state = {
            todoTxt: '',
            todos: [],
            dataSource: this.ds.cloneWithRows([])
        }
    }


    render() {
        return (
            <View>
                <TextInput
                    value={this.state.todoTxt}
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.save}

                >
                </TextInput>

                <Button title='Add' onPress={this.save}>
                </Button>
               
                <LsView dataSource={this.state.dataSource}/>
            </View>


        );
    }

    handleChange = (txt) => {
        this.setState({
            todoTxt: txt
        })
    }

    save = (item) => {
        if (!this.state.todoTxt) {
            Alert.alert(
                'Error',
                'Text is empty')
        }
        this.state.todos.push(this.state.todoTxt);
        this.setState({
            todoTxt: '',
            todos: this.state.todos,
            dataSource: this.ds.cloneWithRows(this.state.todos)
        });
    }
}