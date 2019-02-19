import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, Text, View, Button} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';

import HuntTableList from '../components/HuntTableList';
import AddHunt from '../components/AddHunt';
import HuntDetails from '../components/HuntDetails';
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
class ListingsPage extends React.Component{

    constructor(props){
        super(props);
    }
    state ={
        loaded: true,
        showModal:false
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
        if(self.state.showModal){
            return (
                <View style={styles.container}>
                    <AddHunt
                        parent={self}
                        user_id={self.props.user_id}
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
    Hunts: {
        screen: connect(mapStateToProps,mapDispatchToProps)(ListingsPage),
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
