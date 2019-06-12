import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

function Item(props) {
    return (
        <TouchableOpacity
            style={styles['container']}
            onPress={props['pressTask']}
            onLongPress={props['longPressTask']}
        >
            <Text style={[styles['title'],props['item']['done'] ? styles['lineThrough'] : null]}>
                {props['item']['task']}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    'container': {
        'height' : 40,
        'marginRight' : 20,
        'marginLeft' : 20,
        'marginBottom' : 20,
        'padding' : 10,
        'justifyContent' : 'center',
        'borderWidth' : 2,
        'borderColor' : '#ff8a50',
        'borderRadius' : 4
    },
    'title': {
        'color' : '#ff8a50',
        'fontSize' : 18
    },
    'lineThrough' : {
        'textDecorationLine' : 'line-through'
    }
});

export default Item;