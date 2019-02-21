import React from 'react';

import { Tabs }from './navigators/tab-navigator';
import LoginNavigator from './navigators/login-navigator';
export default class App extends React.Component {
    render() {
        return (
            <LoginNavigator />
        );
    }
}
