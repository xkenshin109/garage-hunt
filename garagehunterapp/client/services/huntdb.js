let config = require('../config/index');
import React from 'react';
export const getApi = (method) =>{
    return fetch(`${config.api.baseUrl}${method}`,{
        method:'GET'
    })
        .then((res)=>{
            return res.json();
        })
        .catch((err)=>{
            console.log(err);
        });
};

export const postApi = (method,data) =>{
    return fetch(`${config.api.baseUrl}${method}`)
        .then((res)=>{
            return res.json();
        });
};
