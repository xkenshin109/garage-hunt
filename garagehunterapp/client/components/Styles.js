import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;
let rowSize =  {_height:(_HEIGHT * .24),_width:(_WIDTH * .95)};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: _WIDTH * .95,
        height: _HEIGHT * .24,

        // flexDirection:"row"
    },
    tableContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: rowSize._width,
        height: rowSize._height,
        backgroundColor: 'white',
        flexDirection:"row"
    },
    cardTitle:{
        backgroundColor: '#006bd6'
    },
    imageRow:{
        flex:1,
        width: rowSize._width*.3,
        height: rowSize._height
    },
    validations:{
        borderWidth: 1,
        borderColor: '#FF0000',
        height: 40,
        backgroundColor:'white',
        alignItems: 'center'
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor:'white',
        alignItems: 'center'
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize:12,
        textAlign: 'center',
        alignItems: 'center'
    }
});
