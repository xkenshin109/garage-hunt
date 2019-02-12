import React, {Component} from 'react';
import {Platform, View, DatePickerAndroid,DatePickerIOS,TextInput,Button,Text} from 'react-native';
import {postApi} from '../services/huntdb';
import {styles} from '../pages/PageStyles';

class AddHunt extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        loading: true,
        newHunt:{
            id:0,
            address:'',
            longitude:0.0,
            latitude:0.0,
            start_datetime:null,
            end_datetime:null,
            active:1
        }
    };
    componentDidMount(){
    }
    callParent = ()=>{
        this.props.parent.setState({showModal:false});
        console.log(this);
    };
    async openDatePicker(){
        try{
            const {action,year,month,day} = await DatePickerAndroid.open({
                date: new Date(2019,2,11)
            });
            if(action !== DatePickerAndroid.dismissedAction){
                return {year,month,day}
            }
        }catch(err){
            console.log(err);
        }
    }
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <Text>Adding Model</Text>
                <TextInput

                />
                <TextInput
                    onPress={()=>{return this.openDatePicker()
                        .then((date)=>{
                            let startDate = new Date(date.year,date.month,date.day);

                            self.setState({newHunt:{
                                    ...self.state.newHunt,
                                    end_datetime: startDate
                                }});
                        })
                    }}
                />
                <Button
                    title={"Save"}
                    onPress={()=>{return this.openDatePicker()
                        .then((date)=>{
                            let endDate= new Date(date.year,date.month,date.day);
                            self.setState({newHunt:{
                                    ...self.state.newHunt,
                                    end_datetime: endDate
                                }});
                        })
                    }}
                />
                <Button
                    title={"Cancel"}
                    onPress={()=>{this.callParent()}}
                />
            </View>
        );
    }
}
// export default HomePage
export default AddHunt

