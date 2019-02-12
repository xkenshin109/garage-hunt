import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: _WIDTH * .95,
        height: _HEIGHT * .24
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
