import { createStackNavigator } from 'react-navigation';
import {DrawNavigator} from './drawer-navigation';
import {Icon}  from 'react-native-elements';
import React from "react";

import Login from '../pages/Login';

const LoginNavigator = createStackNavigator({
    // FavoritesScreen: Favorites,
    // HuntsScreen: Hunts,
    Login: Login,
    MainMenu: createStackNavigator({
        DrawNav: DrawNavigator
    },{
        initialRouteName:'DrawNav',
        navigationOptions: ({navigation}) => ({
            title: 'Welcome!',
            headerTintColor: 'white',
            headerStyle:{backgroundColor: '#0000d6'},
            headerLeft: <Icon color='#f50' name='reorder' size={40} onPress={()=>{
                navigation.state.isDrawerOpen?navigation.closeDrawer():navigation.openDrawer();
            }} />
        })
    })
},{
    initialRouteName:'Login',
    navigationOptions: ({navigation}) => ({
        header:null,
        hideHeader:true
    })
});

export default LoginNavigator;
