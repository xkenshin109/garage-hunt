import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, Text, View} from 'react-native';
import {styles} from "./PageStyles";
import {Icon} from "react-native-elements";

class RegisterScreen extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loaded: true,
        showModal:false,
        showDetails:false,
        profile_pic:null,
        Account_id:null,
        facebook_id:null,
        name: null,
        email:null
    };
    render() {
        let self = this;

    }
}

export default RegisterScreen
