/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider}  from 'react-redux';
import App from './client/App';
import {name as appName} from './app.json';
import configureStore from './client/redux/';
let store = configureStore();
const index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent(appName, () => index, false);
