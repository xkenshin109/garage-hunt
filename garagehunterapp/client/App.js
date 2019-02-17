import React from 'react';

import { Tabs }from './navigators/tab-navigator';
import AppNavigator from './navigators/app-navigator';
export default class App extends React.Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}
