import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
import {styles} from "./PageStyles";
import {getApi,postApi} from '../services/huntdb';
import {connect} from 'react-redux';
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
        user_id: null,
        hunts:[]
    };
    componentDidMount(){
        let self = this;
        return getApi('SiteListings')
            .then((listings)=>{
                self.state.hunts = listings.data.map((l,i)=>{return{key:i.toString(),item:l}});
                console.log('STATE',self.state);
            })
    }

    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <FlatList
                    data={self.state.hunts}
                    renderItem={(item,index)=>
                        <View>
                            <Text>{item.item.address?item.item.address:"NO ADDRESS PROVIDED..."}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}
// export default ListingsPage
export default connect(mapStateToProps,mapDispatchToProps)(ListingsPage)