import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Item from './Item';
import {toggleTaskStatus,editTask} from '../actions';

function List(props) {
    return (
        <FlatList
            data={props['tasks']}
            renderItem={({item}) => {
                return (
                    <Item
                        item={item}
                        pressTask={() => {props['toggleTaskStatus'](item['id'])}}
                        longPressTask={() => {props['editTask'](item)}}
                    />
                );
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

const mapDispatchToProps = {
    'toggleTaskStatus' : toggleTaskStatus,
    'editTask' : editTask
}

export default connect(mapStateToProps,mapDispatchToProps)(List);