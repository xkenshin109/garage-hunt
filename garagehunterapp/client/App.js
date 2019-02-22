import React from 'react';
import LoginNavigator from './navigators/login-navigator';
import {AppState} from 'react-native';
import {storeData,getData} from './services/storage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './redux/actions';
class App extends React.Component {
    state = {
        appState: AppState.currentState,
    };
    componentWillMount(){
        this.props.getUserAccount();
        AppState.addEventListener('change',this._handleStateChange);
    }

    componentWillUnmount() {
        this.props.sync(this.props.account);
        AppState.removeListener('change',this._handleStateChange);
    }

    _handleStateChange = (nextAppState) =>{
        console.log(nextAppState);
        if(nextAppState === 'background'){

        }
    };
    render() {
        return (
            <LoginNavigator
                account={this.props.account}
            />
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        account:state.passport.account
    }
};

const mapDispatch = (dispatch)=>{
    return bindActionCreators({
        sync: action.syncAccount,
        getUserAccount: action.getAccountInfo,
        $alert: action.displayAlert
    },dispatch)
};
export default connect(mapStateToProps,mapDispatch)(App)