// var mongoose = require('./../db/mongoose');

// var Requirement = mongoose.model('requirement',{
//     materialspec:{
//             type:String
//     }, 
//     quantity:{
//         type:Number
//     }, 
//     quality:{
//         type:String
//     } 
//  });
 

//  module.exports = {Requirement}

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/nodetest1');

var Requirement = mongoose.model('requirement',{
    materialspec:{
            type:String
    }, 
    quantity:{
        type:Number
    }, 
    quality:{
        type:String
    } 
 });

 module.exports = {Requirement};
//module.exports = {Requirement};