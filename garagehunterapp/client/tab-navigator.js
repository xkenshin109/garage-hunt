import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {Icon}  from 'react-native-elements';
import Home from './pages/Home';
import Listings from './pages/Hunts';
import Favorites from './pages/Favorites';

export const Tabs = createBottomTabNavigator({
    Hunts:{
        screen: Listings,
        navigationOptions:({navigation})=>({
            title:'Hunts',
            tabBarIcon: <Icon color='#f50' name='casino' size={30} />
        })
    },
    Favorites:{
        screen: Favorites,
        navigationOptions:({navigation})=>({
            title:'Favorites',
            tabBarIcon: <Icon color='#f50' name='favorite-border' size={30} />
        })
    },
    Profile:{
        screen:Home,
        navigationOptions:({navigation})=>({
            title:'Profile',
            tabBarIcon: <Icon color='#f50' name='person' size={30} />
        })
    }
},{
    header:'none',
    order:['Profile','Hunts','Favorites'],
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

