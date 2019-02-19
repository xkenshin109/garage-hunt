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
    return fetch(`${config.api.baseUrl}${method}`,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body: JSON.stringify(data)
    })
        .then((res)=>{
            return res.json();
        });
};

function encodeRequest(data){
    let ret = [];
    for(let prop in data){
        let key = encodeURIComponent(prop);
        let value = encodeURIComponent(data[prop]);
        ret.push(key+'='+value);
    }
    return ret.join('&');
}
