import { LOGGED_IN } from './action-types';

let defaultState = {
    auth:{
        loggedIn: false
    },
    userId:5,
    lookups:{}
};

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case LOGGED_IN:
            console.log(action);
            Object.assign({},state.auth,{loggedIn:true});
            return state.userId;
        default:
            return state;
    }
};
export default reducers;