import {combineReducers} from "redux";
import {storeData,getData} from '../services/storage';
let defaultState = {
    facebook_id: null,
    Account_id: null,
    email: null,
    name: null,
    lookups:{},
    todo:[]
};

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case 'sync-account':
            storeData('account',action.payload);
            return Object.assign({},state);
        case "get-account-info":
            return getData('account')
                .then((val)=>{
                    if(!val){
                        return {state};
                    }
                    let account = JSON.parse(val);
                    account.Account_id = 1;
                    return Object.assign({},state,account);
                });
        case 'alert':
            alert(`${action.payload}`);
            return Object.assign({},state);
        default:
            return Object.assign({},state);
    }
};

const todo =(state =[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    payload: action.payload,
                    completed:false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo=>
               todo.id === action.id ? {...todo,completed: !todo.completed}: todo
            );
    }
};
export const rootReducer = combineReducers({
    passport: reducers,
    todo: todo
});


