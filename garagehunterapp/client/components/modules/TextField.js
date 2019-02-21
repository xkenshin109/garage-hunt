import React from 'react';
import {Text,TextInput, View} from 'react-native';
import {styles} from '../Styles';

class TextField extends React.Component{
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
        ret[self.props.name] = self.state.value;
        self.setState({value:text});
        self.props.parent.updateState(ret)
        return self.validate();
    }
    render(){
        let self = this;
        return (
            <View styles={{flex:1}}>
                <Text style={styles.textHeader}>{self.props.header}</Text>
                <TextInput
                    style={self.state.error?styles.validations:styles.textInput}
                    value={self.state.value}
                    onChangeText={(text)=>{self._onChange(text)}}
                />
            </View>
        )
    }
}

export default TextField
