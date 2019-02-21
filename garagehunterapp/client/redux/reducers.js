import { postApi} from "../services/huntdb";

let defaultState = {
    auth:{
        loggedIn: false,
        fbLogin: false,
    },
    userId:1,
    lookups:{}
};

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case "update-account":
            Object.assign({...defaultState,...action.payload});
            return state;
        default:
            return state;
    }
};
export default reducers;
