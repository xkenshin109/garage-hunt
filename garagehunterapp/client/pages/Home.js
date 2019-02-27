import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, View, Text} from 'react-native';
import {styles} from './PageStyles';
import AccountDetails from '../components/AccountDetails';
import {Icon} from "react-native-elements";
import {getData, storeData} from "../services/storage";
import Promise from "bluebird";

class HomePage extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
            <Icon color='#f50' name='person' size={30} />
                )
    };
    constructor(props){
        super(props);
    }
    state ={
        loaded: true,
        profile_pic:null,
        Account_id:null,
        facebook_id:null,
        name: null,
        email:null
    };
    componentWillMount() {
    }
    componentDidMount() {
    }
    updateState = (key,value) =>{
        let state = this.state;
        state[key] = value;
        this.setState({...this.state,...state});
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        let parentState = prevProps.parent.state;
        let acct = {
            Account_id: parentState.Account_id,
            email: parentState.email,
            facebook_id: parentState.facebook_id,
            name: parentState.name,
            profile_pic: parentState.profile_pic
        };
        Object.keys(acct).forEach((prop,i)=>{
            if(prevState[prop] !== acct[prop]){
                this.updateState(prop,acct[prop]);
            }
        });
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps);

    }
    render() {
        let self = this;
        let parent = self.props.screenProps.parent;
        if(!parent.state.Account_id && !parent.state.facebook_id){
            return (
                <View style={styles.container}>
                    <Text>No Account</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <AccountDetails
                    Account_id={self.props.screenProps.parent.state.Account_id}
                    facebook_id={self.props.screenProps.parent.state.facebook_id}
                    parent = {self}
                />
            </View>
        );
    }
}

const stackExport = createStackNavigator({
   Profile:{
       screen: HomePage,
       navigationOptions:({navigation})=>({
           drawerIcon: <Icon color='#f50' name='person' size={30} />
       })
   }
},{
    headerMode:'none'
});
export default stackExport

