import moment from 'moment';
import React, {Component} from 'react';
import {
    Platform,
    View,
    DatePickerAndroid,
    DatePickerIOS,
    TextInput,
    Button,
    Text,
    ScrollView
} from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {postApi} from '../services/huntdb';
import {styles} from './Styles';

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
            start_date:null,
            end_date:null,
            active:1,
            description:''
        }
    };
    componentDidMount(){
    }
    callParent = ()=>{
        this.props.parent.setState({showModal:false});
        console.log(this);
    };
    saveHunt = ()=>{
        let self = this;
        let hunt = self.state.newHunt;
        hunt.Account_id = self.props.user_id;
        return postApi('Hunts/Address',hunt);
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
    _onChange(data){
        let self = this;
        let hunt = self.state.newHunt;
        Object.keys(data).forEach((prop,index)=>{
           hunt[prop] = data[prop];
        });
        self.setState({newHunt:hunt});
    }
    render() {
        let self = this;
        return (

            <View style={styles.container}>
                <Card style={{flex:1}}>
                    <View style={{borderWidth:1}}>
                        <Text style={styles.textHeader}>Enter the Address</Text>
                        <TextInput
                            style={styles.textInput}
                            value={self.state.newHunt.address}
                            onChangeText={(text)=>{
                                self._onChange({address:text})
                            }}
                        />
                    </View>
                </Card>
                <Card style={{flex:4}}>
                    <View>
                        <Text style={styles.textHeader}>Description</Text>
                        <TextInput
                            style={styles.textInput}
                            value={self.state.newHunt.description}
                            onChangeText={(text)=>{
                                self._onChange({description:text})
                            }}
                        />
                        <Text style={styles.textHeader}>Enter a description</Text>
                        <DatePicker
                            style={{width: 200}}
                            date={self.state.newHunt.start_date}
                            mode="date"
                            placeholder="select start date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) =>{self._onChange({start_date: date})}}
                        />
                        <DatePicker
                            style={{width: 200}}
                            date={self.state.newHunt.end_date}
                            mode="date"
                            placeholder="select start date"
                            format="YYYY-MM-DD"
                            minDate={moment().format('YYYY-MM-DD')}
                            maxDate="2025-12-30"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) =>{self._onChange({end_date: date})}}
                        />
                    </View>
                </Card>
                <Card style={{flex:1}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{alignItems:'stretch'}}>
                            <Button
                                title={"Save"}
                                onPress={()=>{return self.saveHunt()
                                    .then((hunt)=>{
                                        console.log('NEW HUNT SAVED',hunt);
                                        self.callParent();
                                    })
                                }}
                            />
                        </View>
                        <View style={{alignItems:'stretch'}}>
                            <Button
                                title={"Cancel"}
                                onPress={()=>{self.callParent()}}
                            />
                        </View>


                    </View>
                </Card>
            </View>
        );
    }
}
// export default HomePage
export default AddHunt

