import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './pages/Home';
import Listings from './pages/Listings';
export const Tabs = createBottomTabNavigator({
    Hunts:{
        screen: Listings
    },
    Profile:{
        screen:Home
    }
},{
    activeTintColor: '#e91e63',
    labelStyle: {
        fontSize: 12,
    },
    style: {
        backgroundColor: 'blue',
    },
});

