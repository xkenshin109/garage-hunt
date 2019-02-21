import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

class DateField extends React.Component{
    /*
        Props:
            parent => what is using this. Use to call setState for parent
            name => Properties name for which we use to update
            header => Text Label for Input
            validationMessage => What message to show when validating. If required is false, will not need
            required => Will style a validation if needed
            validationOverride => pass in a function
    * */
    constructor(props){
        super(props);
    }
    state = {
        value: '',
        error: false
    };
    validate= async ()=>{
        let self = this;
        let error = false;
        if(self.props.validationOverride){
            error = await self.props.validationOverride();
        }else
        if(!self.state.value || self.state.value === ''){
            error = true;
        }
        self.setState({error:error});
    };
    _onChange(text){
        let self = this;
        let ret={};
        ret[self.props.name] = text;
        self.setState({value:text});
        self.props.parent.updateState(ret);
        return self.validate();
    }
    render(){
        let self = this;
        return (
            <View styles={{flex:1}}>
                <Text style={styles.textHeader}>{self.props.header}</Text>
                <DatePicker
                    style={self.state.error?styles.validations:styles.textInput}
                    date={self.state.value}
                    mode="date"
                    placeholder="Select Date"
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
                    onDateChange={(text)=>{self._onChange(text)}}
                />
            </View>
        )
    }
}

export default DateField
