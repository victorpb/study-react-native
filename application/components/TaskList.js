import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            todoTxt: '',
            todos: []
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
                <View>
                    {this.state.todos.map((item, key) => (
                        <Text key={key} >
                            {item}
                        </Text>
                    ))}

                </View>
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
        });
    }
}