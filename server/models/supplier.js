var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nodetest1');

var Supplier = mongoose.model('suppliers',{
    name:{
            type:String
    }, 
    email:{
        type:String
    }, 
    password:{
        type:String
    } 
 });
 
//  var newsupplier = new Supplier({
//      name:'Kall',
//      email:'govila.niyati@gmail.com',
//      password:'pass'
//  });

// //  newsupplier.save().then((docs)=>{
// //      console.log(doc)
// //  });

    

 module.exports = {Supplier};