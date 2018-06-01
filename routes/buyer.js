var express = require('express');
var router = express.Router();
const sendMail = require('./send-email2');
var {Requirement} = require('./../server/models/requirement');
var {Supplier} = require('./../server/models/supplier');


//var {Requirement} = require('./../server/db/mongoose');
//var {Requirement} = require('./../server/db/requirement1.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to buyer portal');
});


/* GET New requirement page. */
router.get('/newreq', function(req, res) {
    res.render('newrequirement', { title: 'Add New Requirement' });
  });


        

router.post('/addreq', function(req, res) {

    // Set our internal DB variable
    //var db = req.db;
  //res.send('hit');
    // Get our form values. These rely on the "name" attributes
    var materialspec = req.body.materialspec;
    var quality = req.body.quality;
    var quantity = req.body.quantity;
  
    var require = new Requirement({
        materialspec:materialspec,
        quantity:quantity,
        quality:quality
     });

      Supplier.find().then((docs)=>{
          console.log(JSON.stringify(docs,undefined,2));
      });
       
     require.save().then((doc)=>{
        // console.log(doc);
       
         var allsuppliers ;

          Supplier.find()        
         .select( {'email':1,'_id':0 } )
         .exec(function(err, docs){
             docs = docs.map(function(doc) { return doc.email; });
             if(err){
               return console.log(err);
             } else {
               allsuppliers =docs.concat().toString();
               console.log(allsuppliers);
               sendMail(allsuppliers,'Adding Requirements',doc.materialspec);    
             };
            });

            

        //sendMail(allsuppliers,'Adding Requirements',doc.materialspec);
        // res.send(doc);
         res.redirect("requirementlist");
        
        },(e)=>{
         console.log(e);
     });
    });
 

  router.get('/requirementlist', function(req, res) {
  
    Requirement.find().then((docs) => {
       // console.log(JSON.stringify(docs, undefined, 2));
        res.render('requirementlist', {
          "requirementlist" : docs 
     // });
        });
   
    });
        //console.log(JSON.stringify(docs, undefined, 2));
      });
  
     
  
       
  
   

module.exports = router;