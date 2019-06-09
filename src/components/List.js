import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                {this.props['tasks'].map((cur) => {
                    return <Text key={cur['id']}>{cur['task']}</Text>;
                })}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        'tasks' : state['tasks']
    };
}

export default connect(mapStateToProps)(List);