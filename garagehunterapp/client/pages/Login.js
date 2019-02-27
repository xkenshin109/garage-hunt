import React, {Component} from 'react';
import {View, Button, TouchableHighlight, Text} from 'react-native';
import {Divider} from "react-native-elements";
import {LoginButton,LoginManager, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {styles} from './PageStyles';
import {postApi,getExternalApi} from "../services/huntdb";

class LoginScreen extends Component{
    constructor(props){
        super(props);
    }
    state = {

    };
    fbLogin(){
        let self = this;

    }

    render(){
        let self = this;

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text>Login with email</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text>Register</Text>
                </TouchableHighlight>
                <Divider style={{backgroundColor:'black'}}/>
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
                                    getExternalApi(res.picture.data.url)
                                        .then((pic)=>{
                                            return postApi('FacebookAccount/Login',{
                                                facebook_id: res.id,
                                                email: res.email,
                                                name: res.name,
                                                profile_pic: pic
                                            })
                                        })

                                        .then((res)=>{
                                            self.props.screenProps.parent._changeState({
                                                facebook_id: res.data.account.facebook_id,
                                                name: res.data.account.name,
                                                email: res.data.account.email,
                                                Account_id: res.data.account.Account_id
                                            });
                                            self.props.navigation.navigate('MainMenu',...parent.state);
                                        });
                                }
                            );
                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start();
                        }
                    }
                }
                onLogoutFinished={()=> {
                    self.props.screenProps.parent._changeState({
                        facebook_id:null,
                        name:null,
                        email:null,
                        Account_id: null
                    });
                }}
            />
            </View>
        )
    }
}
export default LoginScreen