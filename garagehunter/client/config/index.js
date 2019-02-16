let config;
config = require('./development');
config.environment = 'development';
// if(process.env.NODE_ENV){
//     config = require(`./${process.env.NODE_ENV}`);
//     config.environment = process.env.NODE_ENV;
// }else{
//     config = require('./development');
//     config.environment = 'development';
// }

module.exports = config;