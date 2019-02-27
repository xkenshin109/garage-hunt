import { createStackNavigator } from 'react-navigation';
// import {DrawNavigator} from './drawer-navigation';
import {Icon}  from 'react-native-elements';
import React from "react";

import Login from '../pages/Login';

const LoginNavigator = createStackNavigator({
    // FavoritesScreen: Favorites,
    // HuntsScreen: Hunts,
    Login: {
        screen: Login,
        // screenProps:  this.props
    },
    //TODO: This is where we are going to have our Login
    // MainMenu:
},{
    initialRouteName:'Login',
    navigationOptions: ({navigation}) => ({
        header:null,
        hideHeader:true
    })
});

export default LoginNavigator;
