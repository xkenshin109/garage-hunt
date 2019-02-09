import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import reducers from './reducers';
const rootReducer = combineReducers({
     passport: reducers
});
const configureStore = () =>{
    return createStore(rootReducer,applyMiddleware(thunk));
};
export default configureStore;