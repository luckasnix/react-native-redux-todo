import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        'title': 'Lista de tarefas',
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
                <TouchableOpacity style={styles['button']} onPress={() => {this.props.navigation.navigate('form')}}>
                    <Text style={styles['buttonTitle']}>Criar nova tarefa</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Home;