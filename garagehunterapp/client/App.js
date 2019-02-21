import React from 'react';
import LoginNavigator from './navigators/login-navigator';
import {AppState} from 'react-native';
import {setItem,getItem} from './services/storage';
import {connect} from 'react-redux';
class App extends React.Component {
    state = {
        appState: AppState.currentState
    };
    componentDidMount() {
        let self = this;
        return getItem('')
        AppState.addEventListener('change',this._handleStateChange);
    }
    componentWillUnmount() {
        AppState.removeListener('change',this._handleStateChange);
    }

    _handleStateChange = (nextAppState) =>{
        console.log(nextAppState);
        if(nextAppState === 'background'){

        }
    };
    render() {
        return (
            <LoginNavigator />
        );
    }
}

export default connect()(App)