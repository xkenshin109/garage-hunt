import {AsyncStorage} from 'react-native';
//
// function StoreData(){
//
// }
// StoreData.prototype.storeData = async (key,value) =>{
//     try{
//         await AsyncStorage.setItem(key,value);
//     }catch(err){
//         //What can you do ya know
//     }
// };
//
// StoreData.prototype.getData = async (key) =>{
//     try{
//         const value = await AsyncStorage.getItem(key,function(val){
//             return val
//         });
//         return value;
//     }catch(err){
//         //TODO: figure out how to handle this. Technical debt is coming :'(
//     }
// };

export const storeData = async (key,value) =>{
    try{
        await AsyncStorage.setItem(key,value);
    }catch(err){
        //What can you do ya know
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key, function (val) {
            return val
        });
        return value;
    } catch (err) {
        //TODO: figure out how to handle this. Technical debt is coming :'(
    }
};
// export default StoreData()