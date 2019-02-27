import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, Text, View} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';

import HuntTableList from '../components/HuntTableList';
import AddHunt from '../components/AddHunt';
import {Icon} from "react-native-elements";
// export const mapStateToProps = state => {
//     console.log('HUNTS',state);
//     return {
//         user_id: state.passport.userId
//     }
// };
//
// export const mapDispatchToProps = dispatch => {
//     return {
//
//     }
// };
class FavoritesPage extends React.Component{
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
    showModal(show){
        this.setState({showModal:show});
    }
    showDetails(hunt,show){

    }
    render() {
        let self = this;
        if(self.state.showModal){
            return (
                <View style={styles.container}>
                    <AddHunt
                        parent={self}
                        user_d={self.props.user_id}
                    />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <HuntTableList
                    user_id = {self.props.user_id}
                    parent = {self}
                />
            </View>
        );
    }
}
const stackExport = createStackNavigator({
    Favorites:{
        screen:FavoritesPage,
        //screen:connect(mapStateToProps,mapDispatchToProps)(FavoritesPage),
        navigationOptions:({navigation})=>({
            tabBarIcon: <Icon color='#f50' name='favorite-border' size={30} />
        })
    }
},{
    headerMode:'none'
});

export default stackExport
