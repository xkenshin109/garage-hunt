import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {_WIDTH,HEIGHT} = {_WIDTH:Dimensions.get('window').width,_HEIGHT:Dimensions.get('window').height};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    }
});
