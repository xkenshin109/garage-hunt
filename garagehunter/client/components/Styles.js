import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: _WIDTH * .95,
        height: _HEIGHT * .24,

        // flexDirection:"row"
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor:'white'
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize:12
    }
});
