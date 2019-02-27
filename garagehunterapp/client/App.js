import React from 'react';
import LoginNavigator from './navigators/login-navigator';
import {View, AppState, Platform} from 'react-native';
import {storeData,getData} from './services/storage';
import Promise from 'bluebird';
import {ThemeProvider, colors} from "react-native-elements";
const style = {
    colors: {
        ...Platform.select({
            default: colors.platform.android,
            ios: colors.platform.ios,
        }),
    },
    TouchOpacity:{
        backgroundColor:'purple'
    }
};
class App extends React.Component {
    state = {
        appState: AppState.currentState,
        profile_pic:null,
        Account_id:null,
        facebook_id:null,
        name: null,
        email:null
    };

    componentWillMount(){
        this._getStateStorage();
        AppState.addEventListener('change',this._handleStateChange);
    }
    _saveStateStorage = () => {
        storeData('profile_pic',this.state.profile_pic);
        storeData('account_id',this.state.Account_id);
        storeData('facebook_id',this.state.facebook_id);
        storeData('name',this.state.name);
        storeData('email',this.state.email);
    };
    _getStateStorage = () =>{
        let self = this;
        return Promise.props({
            profile_ic: getData('profile_pic'),
            Account_id: getData('account_id'),
            facebook_id: getData('facebook_id'),
            name: getData('name'),
            email: getData('email'),
        })
            .then(res=>{
                Object.keys(res).forEach((prop,index)=>{
                    if(res[prop]==="null"){
                        res[prop] = null;
                    }else{
                        res[prop] = res[prop].replace(/"/g,'');
                    }
                });
                this._changeState(res);
                self.forceUpdate();
            });
    };
    componentWillUnmount() {
        // this.props.sync(this.props.account);
        AppState.removeListener('change',this._handleStateChange);
    }
    _changeState = (data)=>{
        let self = this;
        self.setState({...self.state,...data});

        self._saveStateStorage();
    };
    _handleStateChange = (nextAppState) =>{
        console.log(nextAppState);
        if(nextAppState === 'background'){

        }
    };
    render() {
        let self = this;
        return (
            <ThemeProvider theme={style.colors}>
                <LoginNavigator
                    screenProps={{parent:self}}
                    facebook_id={self.state.facebook_id}
                />
            </ThemeProvider>
        );
        // if(!self.state.Account_id && !self.state.facebook_id){
        //     return (
        //         <LoginNavigator
        //             screenProps={{parent:self}}
        //             facebook_id={self.state.facebook_id}
        //         />
        //     );
        // }
        // return(
        //     <DrawerNavigator
        //         screenProps={{parent:self}}
        //     />
        // )

    }
}
export default App