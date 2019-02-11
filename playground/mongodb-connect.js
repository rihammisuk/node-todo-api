const {MongoClient, ObjectID} = require('mongodb');
 
// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {

  if (err) {
      return console.log('Unable to connect to mongo db server.');
  }
  console.log("Connected successfully to server");
 
  const db = client.db('TodoApp');

//   db.collection('Todos').insertOne({
//       text : 'something to do',
//       complete: false
//   }, (err, result) =>{
//       if (err) {
//       return console.log('Unable to insert Todo', err);
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2));
      
//   });

  db.collection('Users').insertOne({
      name:'Riham',
      age: 24, 
      location:'Dhaka'
  },(err,result) =>{
      if (err) {
         return console.log('Unable to insert Users ',err);
      }
      console.log(result.ops);
      
  });
 
  client.close();
});