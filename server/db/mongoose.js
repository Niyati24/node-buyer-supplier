var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nodetest1');

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

 module.exports = {mongoose};
//module.exports = {Requirement};
