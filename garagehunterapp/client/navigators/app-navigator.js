import { createStackNavigator } from 'react-navigation';
import {DrawNavigator} from './drawer-navigation';
import {Icon}  from 'react-native-elements';
import React from "react";
import {View} from 'react-native';
import Home from '../pages/Home';
const MenuButton =(navigate)=> (
    <View>
        <Icon color='#f50' name='reorder' size={40} onPress={()=>{
            this.props.navigate.openDrawer();
            navigate.openDrawer();
        }}/>
    </View>
);
const AppNavigator = createStackNavigator({
    // FavoritesScreen: Favorites,
    // HuntsScreen: Hunts,
    Login: Home,
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
    initialRouteName:'MainMenu',
    navigationOptions: ({navigation}) => ({
        header:null,
        hideHeader:true
    })
});

export default AppNavigator;
