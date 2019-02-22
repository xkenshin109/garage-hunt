import {storeData,getData} from '../services/storage';
let defaultState = {
    account:{
        // facebook_id: null,
        // account_id: 1,
        // email: null,
        // name: null
    },
    userId: 1,
    lookups:{}
};

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case 'sync-account':
            storeData('account',action.payload);
            return Object.assign({...defaultState.account,...action.payload});
        case "get-account-info":
            return getData('account')
                .then((val)=>{
                    if(!val){
                        return state;
                    }
                    Object.assign({...defaultState.account,...val});
                    return state;
                });
        case 'alert':
            alert(`${action.payload}`);
            return state;
        default:
            return state;
    }
};
export default reducers;


