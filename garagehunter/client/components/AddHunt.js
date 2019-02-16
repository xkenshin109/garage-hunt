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
            start_datetime:null,
            end_datetime:null,
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
            <View style={{...styles.container,backgroundColor:'green'}}>

                <View style={{borderWidth:1,borderColor:'black'}}>
                    <Text style={styles.textHeader}>Enter the Address</Text>
                    <TextInput
                        style={styles.textInput}
                        value={self.state.newHunt.address}
                    />
                </View>
                <ScrollView style={{flex:2,borderColor:'black'}}>
                    <Text style={styles.textHeader}>Enter the Address</Text>
                    <TextInput
                        style={styles.textInput}
                        value={self.state.newHunt.address}
                    />
                    <Text style={styles.textHeader}>Enter a description</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={self.state.newHunt.start_datetime}
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
                        onDateChange={(date) =>{self._onChange({start_datetime: date})}}
                    />
                    <DatePicker
                        style={{width: 200}}
                        date={self.state.newHunt.end_datetime}
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
                        onDateChange={(date) =>{self._onChange({end_datetime: date})}}
                    />
                </ScrollView>
                <View style={{flexDirection:'column'}}>
                    <View style={{alignItems:'stretch'}}>
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
                    </View>
                    <View style={{alignItems:'stretch'}}>
                        <Button
                            title={"Cancel"}
                            onPress={()=>{self.callParent()}}
                        />
                    </View>


                </View>

            </View>
        );
    }
}
// export default HomePage
export default AddHunt

