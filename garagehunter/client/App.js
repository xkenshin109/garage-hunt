import React, {Component} from 'react';
import {Navigator,NativeModules,View,Text} from 'react-native';
import {COLOR, ThemeContext, getTheme, Drawer, DialogDefaultActions, Dialog, Avatar} from 'react-native-material-ui';
import App from '../App';
import {styles} from './pages/PageStyles';
const themeUi ={
    palette: {
        primaryColor: COLOR.green500
    },
    toolbar:{
        container:{
            height:50
        }
    },
    user_id:1
};

export default class AppTwo extends React.Component {
    render() {
        let self = this;

        return (
            <ThemeContext.Provider value={getTheme(themeUi)}>
                <View style={styles.drawStyle}>
                    <Drawer >
                        <Drawer.Header >
                            <Drawer.Header
                                avatar={<Avatar text="A" />}
                                accounts={[
                                    { avatar: <Avatar text="B" /> },
                                    { avatar: <Avatar text="C" /> },
                                ]}
                                footer={{
                                    dense: true,
                                    centerElement: {
                                        primaryText: 'Reservio',
                                        secondaryText: 'business@email.com',
                                    },
                                    rightElement: 'arrow-drop-down',
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Section
                            divider
                            items={[
                                { icon: 'bookmark-border', value: 'Notifications' },
                                { icon: 'today', value: 'Calendar', active: true },
                                { icon: 'people', value: 'Clients' },
                            ]}
                        />
                        <Drawer.Section
                            title="Personal"
                            items={[
                                { icon: 'info', value: 'Info' },
                                { icon: 'settings', value: 'Settings' },
                            ]}
                        />
                    </Drawer>
                </View>

            </ThemeContext.Provider>
        )
    }
}
