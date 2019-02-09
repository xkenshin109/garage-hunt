import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';
// export const mapStateToProps = state => {
//     return {
//     }
// };
//
// export const mapDispatchToProps = dispatch => {
//     return {
//     }
// };
class ListingsPage extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loaded: true
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the Listings Page</Text>
            </View>
        );
    }
}
export default ListingsPage
// export default connect(mapStateToProps,mapDispatchToProps)(ListingsPage)