import {Tabs} from '../tab-navigator';
import reducers from './reducers';
import {combineReducers} from "redux";

const navReducer = (state,action)=>{
    const newState = Tabs.router.getStateForAction(action,state);
    return newState || state;
};

const rootReducer = combineReducers({
    nav: navReducer
});
