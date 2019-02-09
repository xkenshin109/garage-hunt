import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './pages/Home';
import Listings from './pages/Listings';
export const Tabs = TabNavigator({
    Hunts:{
        screen: Listings
    },
    Profile:{
        screen:Home
    }
});

