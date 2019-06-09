import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function Item(props) {
    return (
        <View style={styles['container']}>
            <Text style={styles['title']}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    'container': {
        'height' : 40,
        'marginRight' : 20,
        'marginLeft' : 20,
        'marginBottom' : 20,
        'padding' : 20,
        'justifyContent' : 'center',
        'borderWidth' : 2,
        'borderColor' : '#ff8a50',
        'borderRadius' : 4
    },
    'title': {
        'color' : '#ff8a50',
        'fontSize' : 18
    }
});

export default Item;