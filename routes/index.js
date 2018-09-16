var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//const Object = require('../../models/Object');

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('objetos');
  // Find some documents
  collection.find({}, {fields: {_id : 0}}
  ).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

function getObjetos(callback) {

  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'swipe';

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    findDocuments(db, callback);
    client.close();
  });

}
/* GET home page. */
router.get('/getData', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  getObjetos((data) => 
    res.send(data) 
  );
});

/* SAVE OBJECT */
/* router.post('/postData', function(req, res, next) {
  Object.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}); */
module.exports = router;
