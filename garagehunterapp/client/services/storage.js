import {AsyncStorage} from 'react-native';
import Promise from 'bluebird';

export const storeData = (key,value) =>{
    return Promise.resolve()
        .then(async()=>{
            let val = JSON.stringify(value);
            await AsyncStorage.setItem(key,val);
        });
};

export const getData = (key) => {
    return Promise.resolve()
        .then(async ()=>{
            try {
                return await AsyncStorage.getItem(key,function(err,val){
                    if(!val || err)return null;
                    if(val === "null"){
                        return null;
                    }
                    let v = val.replace(/"/g,'');
                    return v;
                })

            } catch (err) {
                return err;
            }
        });
};