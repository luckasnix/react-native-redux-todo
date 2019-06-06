import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'textInput': ''
        }
    }
    static navigationOptions = {
        'title': 'Nova tarefa',
        'headerTintColor': '#ffffff',
        'headerStyle': {
            'backgroundColor': '#ff5722'
        },
        'headerTitleStyle': {
            'color': '#ffffff',
            'fontSize': 30
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles['input']}
                    placeholder='Nova tarefa'
                    onChangeText={(text) => {this.setState({
                        'textInput': text
                    })}}
                    value={this.state['textInput']}
                />
                <TouchableOpacity style={styles['button']} onPress={() => {console.log('Tarefa adicionada!')}}>
                    <Text style={styles['buttonTitle']}>Adicionar nova tarefa</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    'input': {
        'height': 40,
        'margin': 20,
        'justifyContent': 'center',
        'alignItems': 'center',
        'fontSize': 18,
        'borderBottomWidth': 2,
        'borderBottomColor': '#ff5722'
    },
    'button': {
        'height': 40,
        'margin': 20,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': '#ff5722',
        'borderRadius': 4
    },
    'buttonTitle': {
        'color': '#ffffff',
        'fontSize': 18
    }
});

export default Form;