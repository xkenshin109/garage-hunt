import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, Text, View, Button} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';

import HuntTableList from '../components/HuntTableList';
import AddHunt from '../components/AddHunt';
import HuntDetails from '../components/HuntDetails';

class HuntsPage extends React.Component{

    constructor(props){
        super(props);
    }
    state ={
        loaded: true,
        showModal:false,
        profile_pic:null,
        Account_id:null,
        facebook_id:null,
        name: null,
        email:null
    };

    showModal(show){
        this.setState({showModal:show});
    }
    showDetails(hunt){
        console.log('hunt',hunt);
        this.props.navigation.navigate('Details',{
            hunt:hunt,
            parent:self
        })
    }
    render() {
        let self = this;
        let parent = self.props.screenProps.parent;
        if(self.state.showModal){
            return (
                <View style={styles.container}>
                    <AddHunt
                        parent={self}
                        Account_id={parent.state.Account_id}
                        facebook_id={parent.state.facebook_id}
                    />
                </View>
            )
        }

        if(!parent.state.Account_id && !parent.state.facebook_id){
            return(
                <View style={styles.container}>
                    <Text>There is no user logged in</Text>
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
                    Account_id = {parent.state.Account_id}
                    facebook_id = {parent.state.facebook_id}
                    parent = {self}
                />
            </View>
        );
    }
}
const stackExport = createStackNavigator({
    Hunts: {
        // screen: connect(mapStateToProps,mapDispatchToProps)(ListingsPage),
        screen: HuntsPage,
    },
    Details:{
        screen: HuntDetails,
        navigationOptions:{
            title:'Details'
        }
    }
},{
    headerMode:'none'
});
export default stackExport
