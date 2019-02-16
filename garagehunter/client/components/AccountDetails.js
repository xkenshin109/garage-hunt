import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {styles} from '../pages/PageStyles';
import {getApi} from "../services/huntdb";
import PropTypes from 'prop-types';
export const mapStateToProps = state => {
    return {
    }
};

export const mapDispatchToProps = dispatch => {
    return {
    }
};
Component.propTypes = {
    user_id: PropTypes.number.isRequired,
    // account:PropTypes.shape({
    //
    // })
};
class AccountDetails extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loading: true,
        account:{}
    };
    componentDidMount(){
        let self = this;
        return getApi(`Account/${self.props.user_id}`)
            .then((acct)=>{
               self.setState({loading:false,account:acct.data});
            });
    }
    render() {
        let self = this;
        const {loading, account} = self.state;
        if(loading){
            return(
                <View style={styles.container}>
                    <Text>Loading</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text>Username</Text>
                <Text>{self.state.account.display_name}</Text>
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

