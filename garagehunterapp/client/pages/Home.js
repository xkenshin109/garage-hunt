import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {styles} from './PageStyles';
import {connect} from 'react-redux';
import AccountDetails from '../components/AccountDetails';
export const mapStateToProps = state => {
    console.log('HOME',state);
    return {
        user_id: state.passport.userId
    }
};

export const mapDispatchToProps = dispatch => {
    return {
    }
};
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loaded: true
    };
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <AccountDetails
                    user_id={self.props.user_id}
                    parent = {self}
                />
            </View>
        );
    }
}
// export default HomePage
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

