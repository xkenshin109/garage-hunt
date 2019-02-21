import React, {Component} from 'react';
import {View} from 'react-native';
import {LoginButton,LoginManager, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {styles} from './PageStyles';
import {connect} from 'react-redux';
import {postApi} from "../services/huntdb";

class FBLoginButton extends Component{
    constructor(props){
        super(props)
    }
    state = {
        accessToken:null
    };
    componentDidMount() {
        let self = this;
        console.log(self);
    }
    render(){
        let self = this;
        return (
            <View style={styles.container}>
                <LoginButton
                    readPermissions={["email"]}
                    onLoginFinished={
                        (error,result)=>{
                            if(error){
                                alert('Login failed with error:' + error.message);
                            }else if(result.isCancelled){
                                alert('Login was cancelled');
                            }else{
                                const infoRequest = new GraphRequest(
                                    '/me?fields=name,picture,email',
                                    null,
                                    (err,res)=>{
                                        if(err){
                                            alert('something went wrong ' + err);
                                            return;
                                        }
                                        postApi('FacebookAccount/Login',{
                                            facebook_id: res.id,
                                            email: res.email,
                                            name: res.name
                                        })
                                            .then((res)=>{
                                                this.props.dispatch({
                                                   type: 'update-account',
                                                   payload:{
                                                       account:{
                                                           facebook_id: res.data.account.facebook_id,
                                                           name: res.data.account.name,
                                                           email: res.data.account.email,
                                                           Account_id: res.data.account.Account_id
                                                       }
                                                   }
                                                });
                                                if(res.data.loggedIn){
                                                    self.props.navigate('MainMenu');
                                                }
                                            });
                                    }
                                );
                                // Start the graph request.
                                new GraphRequestManager().addRequest(infoRequest).start();
                            }
                        }
                    }
                    onLogoutFinished={()=> alert('user logged out')}
                />
            </View>
        )
    }
}

export default connect()(FBLoginButton)