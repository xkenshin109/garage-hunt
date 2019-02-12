import React, {Component} from 'react';
import {Platform, View, FlatList} from 'react-native';
import {getApi} from '../services/huntdb';
import {styles} from '../pages/PageStyles';
import {connect} from 'react-redux';

import HuntTableRow from './HuntTableRow';
class HuntTableList extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loading: true,
        hunts:[]
    };
    componentDidMount(){
        let self = this;
        return getApi('SiteListings')
            .then((hunts)=>{
                const huntList = hunts.data.map((h,i)=>{return {key:i.toString(),item:h}});
                self.setState({loading:false,hunts:huntList});
            })
    }
    showDetails=(hunt,show)=>{
        this.props.parent.showDetails(hunt,show);
    }
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <FlatList
                    data={self.state.hunts}
                    renderItem={({item,index})=>
                        (
                            <HuntTableRow
                                userId = {self.props.user_id}
                                hunt = {item.item}
                                color = {index%2===0?'even':'odd'}
                                parent = {self}
                            />
                        )
                    }
                />
            </View>
    );
    }
}
// export default HomePage
export default HuntTableList

