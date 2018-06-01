var {Supplier} = require('./../server/models/supplier');

   Supplier.find()        
  .select( {'email':1,'_id':0 } )
  .exec(function(err, docs){
      docs = docs.map(function(doc) { return doc.email; });
      if(err){
        console.log(err)
      } else {
       var c=docs.concat().toString();
        console.log(c);
      }
  })

    //   Supplier.find().select({'email':1,'_id':0}).then((docs)=>{
    //      console.log(docs);
    //     });
    



