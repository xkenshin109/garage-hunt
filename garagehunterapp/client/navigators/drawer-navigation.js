import React from 'react';
import {Image,Button, StyleSheet, View} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {LoginManager, LoginButton, } from 'react-native-fbsdk';
import Favorites from '../pages/Favorites';
import Hunts from '../pages/Hunts';
import Profile from '../pages/Home';
import {Icon} from "react-native-elements";
import FBLoginButton from "../pages/Login";

const DrawerNavigator = createDrawerNavigator({
   Profile: {
        screen:Profile,
        navigationOptions:{
           drawerIcon: ({ tintColor }) => (
               <Icon color='#f50' name='person' />
           )
        }
   },
    Favorites:{
        screen:Favorites,
        navigationOptions:{
            drawerIcon: ({ tintColor }) => (
                <Icon color='#f50' name='favorite' />
            )
        }
    },
    Hunts:{
        screen:Hunts,
        navigationOptions:{
            headerMode:'screen',
            drawerIcon: ({ tintColor }) => (
                <Icon color='#f50' name='person' />
            )
        }
    }
},{
    initialRouteName: 'Hunts',
    headerMode:'none',
    navigationOptions: ({navigation}) => ({
    })
});

export default  createStackNavigator({
    DrawNav: DrawerNavigator
},{
    initialRouteName:'DrawNav',
    navigationOptions: ({navigation}) => ({
        title: 'Welcome!',
        headerTintColor: 'white',
        headerStyle:{backgroundColor: '#0000d6'},
        headerLeft: <Icon color='#f50' name='reorder' size={40} onPress={()=>{
            navigation.state.isDrawerOpen?navigation.closeDrawer():navigation.openDrawer();
        }} />,
        headerRight: <Icon color='#f50' name='reorder' size={40} onPress={()=>{
            navigation.state.isDrawerOpen?navigation.closeDrawer():navigation.openDrawer();
        }} />
    })
})