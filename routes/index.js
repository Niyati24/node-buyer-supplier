var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var {Requirement} = require('./../server/models/requirement');
// MongoClient.connect('localhost:27017/nodetest1');
// const client = MongoClient.connection;
// const db = client.db('nodetest1');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});


/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

//to add a new user
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  //var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  //var collection = db.get('usercollection');

  // Submit to the DB
  //var collection = db.get('usercollection');
  MongoClient.connect('mongodb://localhost:27017/nodetest1',(err,client)=>{
    if(err){

      return console.log('unable to connect');
    }
   console.log('connected');

  const db =client.db('nodetest1')
  db.collection('usercollection').insertOne({
      "username" : userName,
      "email" : userEmail
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("userlist");
      }
  });
});
});

router.get('/userlist', function(req, res) {
  
  MongoClient.connect('mongodb://localhost:27017/nodetest1',(err,client)=>{
    if(err){

      return console.log('unable to connect');
    }
    const db =client.db('nodetest1')
    var collection = db.collection('usercollection');
    collection.find().toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
      res.render('userlist', {
        "userlist" : docs
   // });
  });
     // console.log(JSON.stringify(docs, undefined, 2));
    //  collection.find({},{},function(e,docs){
        // res.render('userlist', {
        //     "userlist" : docs
       // });
  });
      //console.log(JSON.stringify(docs, undefined, 2));
    });

    /*
    db.collection('usercollection').find({}).toArray().done((docs)=>{

     

                */
  });
 
 


module.exports = router;
