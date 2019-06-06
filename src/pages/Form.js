import React from 'react';
import { View, Text } from 'react-native';

class Form extends React.Component {
    static navigationOptions = {
        'title': 'Nova tarefa',
        'headerTintColor': '#ffffff',
        'headerStyle': {
            'backgroundColor': '#757575'
        },
        'headerTitleStyle': {
            'color': '#ffffff',
            'fontSize': 30
        }
    }
    render() {
        return (
            <View>
                <Text>FORM</Text>
            </View>
        );
    }
}

export default Form;