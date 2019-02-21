let defaultState = {
    auth:{
        loggedIn: false,
        fbLogin: false,
    },
    account:{
        facebook_id: accountId,
        Account_id: fbId,
        email: email,
        name: name
    },
    userId: accountId,
    // userId: 1,
    lookups:{}
};

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case "update-account":
            Object.assign({...defaultState,...action.payload});
            return state;
        case 'set-values':
            Object.keys(action.payload).forEach(x=>{
                setItem(x,action.payload[x]);
            });
            return state;
        default:
            return state;
    }
};
export default reducers;
