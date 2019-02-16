import React from 'react';
import {Image,Button, StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Favorites from './pages/Favorites';
import Hunts from './pages/Hunts';
import Profile from './pages/Home';
import {Icon} from "react-native-elements";
class ProfileScreen extends React.Component{
    static navigationOptions ={
        drawerLabel: 'Profile',
        drawerIcon:({tintColor})=>{
           return ( <Image
                source={require('./assets/icon1.jpg')}
                style={[styles.icon, {tintColor: tintColor}]}
            />)
        }
    };
    render(){
        return (<Button
            onPress={() => this.props.navigation.navigate('Favorites')}
            title="Profile"
        />)
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export const DrawNavigator = createDrawerNavigator({
   Profile: {
       screen:Profile,
       navigationOptions:{
           drawIcon: <Icon color='#f50' name='person' size={30} />
       }
   },
    Favorites:{
       screen:Favorites
    },
    Hunts:{
       screen:Hunts
    }
});

