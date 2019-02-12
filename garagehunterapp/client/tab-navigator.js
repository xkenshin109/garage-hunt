import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {Icon}  from 'react-native-elements';
import Home from './pages/Home';
import Listings from './pages/Listings';
export const Tabs = createBottomTabNavigator({
    Hunts:{
        screen: Listings
    },
    Profile:{
        screen:Home,
        navigationOptions:({navigation})=>({
            title:'Profile',
            tabBarIcon: <Icon color='#f50' name='computer' size={30}></Icon>
        })
    }
},{
    order:['Profile','Hunts'],
    tabBarOptions:{
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },
        showIcon:true
    }
});

