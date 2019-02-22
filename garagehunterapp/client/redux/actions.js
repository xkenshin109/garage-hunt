export const syncAccount = (payload)=>{
    return {
        type: 'sync-account',
        payload:{
            facebook_id: payload.facebook_id,
            account_id: payload.account_id,
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