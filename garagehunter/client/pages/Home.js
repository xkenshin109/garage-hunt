import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, View} from 'react-native';
import { Drawer, Toolbar } from 'react-native-material-ui';
import {styles} from './PageStyles';
import {connect} from 'react-redux';
import AccountDetails from '../components/AccountDetails';
import {Icon} from "react-native-elements";
import PropTypes from 'prop-types';

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

Component.propTypes = {
    user_id: PropTypes.number
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
                <Drawer>
                    <Drawer.Header/>
                    <Drawer.Section/>
                </Drawer>
                <AccountDetails
                    user_id={self.props.user_id}
                    parent = {self}
                />
            </View>
        );
    }
}


const stackExport = createStackNavigator({
   Profile:{
       screen: connect(mapStateToProps,mapDispatchToProps)(HomePage),
       navigationOptions:({navigation})=>({
           title:'Profile',
           tabBarIcon: <Icon color='#f50' name='person' size={30} />
       })
   }
});
export default stackExport

