export const syncAccount = (payload)=> {
    return {
        type: 'sync-account',
        payload: {
            facebook_id: payload.facebook_id,
            Account_id: payload.Account_id,
            email: payload.email,
            name: payload.name
        }
    }
};

export const getAccountInfo = ()=>{
  return {
      type: 'get-account-info',
      payload:{}
  }
};

export const displayAlert = (msg) =>{
  return {
      type: 'alert',
      payload:msg
  }
};