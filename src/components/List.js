import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Item from './Item';

function List(props) {
    return (
        <FlatList
            data={props['tasks']}
            renderItem={({item}) => {
                return <Item title={item['task']}/>
            }}
            keyExtractor={(item) => {
                return item['id'].toString();
            }}
        />
    );
}

function mapStateToProps(state) {
    return {
        'tasks' : state['tasks']
    };
}

export default connect(mapStateToProps)(List);