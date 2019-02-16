import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, Text, View, Button} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';

import HuntTableList from '../components/HuntTableList';
import AddHunt from '../components/AddHunt';
import {Icon} from "react-native-elements";
export const mapStateToProps = state => {
    console.log('HUNTS',state);
    return {
        user_id: state.passport.userId
    }
};

export const mapDispatchToProps = dispatch => {
    return {

    }
};
class FavoritesPage extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loaded: true,
        showModal:false,
        showDetails:false
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
                <Button
                    title={"Add"}
                    onPress={()=>{self.showModal(true)}}
                />
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
        screen:connect(mapStateToProps,mapDispatchToProps)(FavoritesPage),
        navigationOptions:({navigation})=>({
            title:'Favorites',
            tabBarIcon: <Icon color='#f50' name='favorite-border' size={30} />
        })
    }
});

export default stackExport
