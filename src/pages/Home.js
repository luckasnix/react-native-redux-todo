import React,{Component} from 'react';
import {createStore} from 'redux';
import {View,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {reducers} from '../reducers';
import Form from './Form';

const store = createStore(reducers);

export default class Home extends Component {
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
            <Provider store={store}>
                <View>
                    <Form/>
                </View>
            </Provider>
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