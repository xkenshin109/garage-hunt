import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {styles} from '../pages/PageStyles';
import {getApi} from "../services/huntdb";

class AccountDetails extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loading: true,
        updateNeeded:false
    };
    componentDidMount(){
        let self = this;
        return self.props.account_id?getApi(`Account/${self.props.Account_id}`):
            getApi(`FacebookAccount/${self.props.facebook_id}`)
            .then((acct)=>{
                let formed = {
                };
               self.setState({loading:false,account:acct.data});
            });
    }
    updateState = (value) =>{
        // let state = this.state;
        // state[key] = value;
        this.setState({...this.state,...value});
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        let self = this;
        if(this.state.updateNeeded){

            self.updateState({account:prevState.account,updateNeeded:false});
        }
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        let parentState = nextProps.parent.props.screenProps.parent.state;
        let acct = {
            Account_id: parentState.Account_id,
            facebook_id: parentState.facebook_id,
        };

        Object.keys(acct).forEach((prop,i)=>{
            if(nextState.account[prop] !== acct[prop]){
                this.updateState({updateNeeded:true});
                // this.updateState(prop,acct[prop]);
            }
        });

    }
    render() {
        let self = this;
        const {loading} = self.state;
        if(loading){
            return(
                <View style={styles.container}>
                    <Text>Loading</Text>
                </View>
            )
        }
        if(!self.state.account.Account_id && !self.state.account.facebook_id){
            return (
                <View>
                    <Text>No account was loaded something went wrong.</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text>Username</Text>
                <Text>{self.state.account.name}</Text>
                <Text>Email</Text>
                <Text>{self.state.account.email}</Text>
                <Text>Password</Text>
                <Text>Sorry not today homie</Text>
            </View>
        );
    }
}
// export default HomePage
export default AccountDetails

