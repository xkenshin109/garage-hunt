import React from 'react';
import {Platform, Text, View, Button} from 'react-native';
import {styles} from "./PageStyles";
import {connect} from 'react-redux';

import HuntTableList from '../components/HuntTableList';
import AddHunt from '../components/AddHunt';
import HuntDetails from '../components/HuntDetails';
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
        showModal:false,
        showDetails:false,
        selectedHunt:{}
    };
    showModal(show){
        this.setState({showModal:show});
    }
    showDetails = (hunt,show)=>{
        this.setState({showDetails:show,showModal:false,selectedHunt:hunt});
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
        if(self.state.showDetails){
            return (
                <View>
                    <HuntDetails
                        hunt ={self.state.selectedHunt}
                        parent = {self}
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
// export default ListingsPage
export default connect(mapStateToProps,mapDispatchToProps)(ListingsPage)
