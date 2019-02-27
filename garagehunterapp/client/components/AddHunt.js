import React from 'react';
import {
    View,
    Button,
    Text,
    ScrollView
} from 'react-native';
import {Card} from 'react-native-elements';
import {postApi} from '../services/huntdb';
import {styles} from './Styles';
import TextField from './modules/TextField';
import DateField from './modules/DatePicker';
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
        hunt.Account_id = self.props.Account_id;
        return postApi('Hunts/Address',hunt);
    };
    updateState = (data)=>{
        let self = this;
        let hunt = self.state.newHunt;
        Object.keys(data).forEach((prop,i)=>{
           hunt[prop] = data[prop];
        });
        self.setState({newHunt:hunt});
    };
    render() {
        let self = this;
        return (

            <View style={styles.container}>
                <Card style={{flex:1}}>
                    <TextField
                        parent={self}
                        name={'address'}
                        header={'Enter the Address'}
                        required={true}
                    />
                </Card>
                <Card style={{flex:4,alignItems:'center'}}>
                    <TextField
                        parent={self}
                        name={'description'}
                        header={'Description'}
                        required={false}
                    />
                    <DateField
                        parent={self}
                        name={'start_date'}
                        header={'Select Start Date'}
                        required={false}
                    />
                    <DateField
                        parent={self}
                        name={'end_date'}
                        header={'Select End Date'}
                        required={false}
                    />
                </Card>
                <Card style={{flex:1}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{alignItems:'stretch'}}>
                            <Button
                                title={"Save"}
                                onPress={()=>{return self.saveHunt()
                                    .then(()=>{
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

