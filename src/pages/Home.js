import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        'title': 'Lista de tarefas',
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
                <Text>HOME</Text>
            </View>
        );
    }
}

export default Home;