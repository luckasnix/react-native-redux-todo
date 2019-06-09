import React,{Component} from 'react';
import {createStore} from 'redux';
import {View,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {reducers} from '../reducers';
import devToolsEnhancer from 'remote-redux-devtools'
import Form from '../components/Form';
import List from '../components/List';

const store = createStore(reducers,devToolsEnhancer());

class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        'title' : 'Lista de tarefas',
        'headerTintColor' : '#ffffff',
        'headerStyle' : {
            'backgroundColor' : '#ff5722'
        },
        'headerTitleStyle' : {
            'color' : '#ffffff',
            'fontSize' : 30
        }
    }
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Form/>
                    <List/>
                </View>
            </Provider>
        );
    }
}

export default Home;