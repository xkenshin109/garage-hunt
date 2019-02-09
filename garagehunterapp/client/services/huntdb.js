let config = require('../config/index');

export const getApi = (method) =>{
    return fetch(`${config.api.baseUrl}${method}`)
        .then((res)=>{
            return res.json();
        });
};

export const postApi = (method,data) =>{
    return fetch(`${config.api.baseUrl}${method}`)
        .then((res)=>{
            return res.json();
        });
};