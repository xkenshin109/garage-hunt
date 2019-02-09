import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {styles} from './PageStyles';
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
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loaded: true
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>This is the Home Page</Text>
                <Button title={"Next Tab"}
                        onPress={() => navigate('Listings')}/>
            </View>
        );
    }
}
export default HomePage
// export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

