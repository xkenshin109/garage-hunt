import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, View, FlatList,Text} from 'react-native';
import {getApi} from '../services/huntdb';
import {styles} from '../pages/PageStyles';
import {connect} from 'react-redux';

import HuntTableRow from './HuntTableRow';
import HuntDetails from './HuntDetails';
class HuntTableList extends React.Component{

    constructor(props){
        super(props);
    }
    state ={
        loading: true,
        hunts:[],
        selectedHunt:{},
        showDetails:false
    };
    componentDidMount(){
        let self = this;
        return getApi('Hunts')
            .then((hunts)=>{
                const huntList = hunts.data.map((h,i)=>{return {key:i.toString(),item:h}});
                self.setState({loading:false,hunts:huntList});
            })
    }
    showDetails=(hunt,show)=>{
        let self = this;
        self.props.parent.showDetails(hunt);
        // self.setState({selectedHunt:hunt,showDetails:show});
    };
    render() {
        let self = this;
        if(self.state.loading){
            return(
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        // if(self.state.showDetails && self.state.selectedHunt){
        //     return(
        //         <HuntDetails
        //             hunt={self.state.selectedHunt}
        //             parent={self}
        //         />
        //     );
        // }
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
// const stackExport = createStackNavigator({
//     HuntTableList: {
//         screen: HuntTableList,
//         navigationOptions:{
//             title:'Hunts'
//         }
//     },
//     HuntDetails: {
//         screen: HuntDetails,
//         navigationOptions: {
//             title:'Details'
//         }
//     }
// });
// export default HomePage
export default HuntTableList;

