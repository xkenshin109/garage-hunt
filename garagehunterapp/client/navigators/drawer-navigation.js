import React from 'react';
import {Image,Button, StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Favorites from '../pages/Favorites';
import Hunts from '../pages/Hunts';
import Profile from '../pages/Home';
import {Icon} from "react-native-elements";

export const DrawNavigator = createDrawerNavigator({
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
                <Icon color='#f50' name='all_inbox' />
            )
        }
    }
},{
    initialRouteName: 'Hunts',
    headerMode:'none',
    navigationOptions: ({navigation}) => ({

    })
});

