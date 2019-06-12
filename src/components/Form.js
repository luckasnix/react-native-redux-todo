import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTask,setTextInput,updateTask} from '../actions';

class Form extends Component {
    titleGenerator() {
        if (this.props['input']['id']) {
            return 'Salvar edição';
        } else {
            return 'Adicionar tarefa';
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles['input']}
                    placeholder='Nova tarefa'
                    onChangeText={(text) => {this.props['setTextInput'](text)}}
                    value={this.props['input']['task']}
                />
                <TouchableOpacity
                    style={styles['button']}
                    onPress={() => {
                        if (this.props['input']['id']) {
                            this.props['updateTask'](this.props['input']);
                        } else {
                            this.props['addTask'](this.props['input']['task']);
                        }
                    }}>
                    <Text style={styles['buttonTitle']}>
                        {this.titleGenerator()}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    'input' : {
        'height' : 40,
        'marginTop' : 20,
        'marginRight' : 20,
        'marginLeft' : 20,
        'justifyContent' : 'center',
        'alignItems' : 'center',
        'fontSize' : 18,
        'borderBottomWidth' : 2,
        'borderBottomColor' : '#ff5722'
    },
    'button' : {
        'height' : 40,
        'margin' : 20,
        'justifyContent' : 'center',
        'alignItems' : 'center',
        'backgroundColor' : '#ff5722',
        'borderRadius' : 4
    },
    'buttonTitle' : {
        'color' : '#ffffff',
        'fontSize' : 18
    }
});

function mapStateToProps(state) {
    return {
        'input' : state['input']
    };
}

const mapDispatchToProps = {
    'addTask' : addTask,
    'setTextInput' : setTextInput,
    'updateTask' : updateTask
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);