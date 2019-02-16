import { createStackNavigator } from 'react-navigation';
import {DrawNavigator} from './drawer-navigation';
import {Icon}  from 'react-native-elements';

import React from "react";

const AppNavigator = createStackNavigator({
    DrawerStack: DrawNavigator
},{
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#006bd6'},
        title: 'Welcome!',
        headerTintColor: 'white',
        headerLeft: <Icon color='#f50' name='reorder' size={40} onPress={()=>{navigation.openDrawer()}} />
    })
});

export default AppNavigator;
