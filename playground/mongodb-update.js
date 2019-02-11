const {MongoClient, ObjectId} = require('mongodb');
 
// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {

  if (err) {
      return console.log('Unable to connect to mongo db server.');
  }
  console.log("Connected successfully to server");
 
  const db = client.db('TodoApp');
  

  //Update Many TODO------------------------------
//   db.collection('Todos').updateMany({_id : ObjectId("5c6120259c8803d8927ca9e8")}).then((result)=>{
//     console.log(result);
    
//     });

  //Update One TODO------------------------------

//   db.collection('Todos').findOneAndUpdate({
//       _id : new ObjectId('5c6176dd9c8803d8927caf66')
//     },{
//         $set: {
//             complete: true
//         }
//     },{
//         returnOriginal:false
//     }).then((result)=>{
//       console.log(result);
      
//   });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectId('5c6123778607dc1f349fe111')
  }, {
      $set :{
          name: 'Riham'
      },
      $inc:{
          age: -1
      }
  },{
      returnOriginal:false
  }).then((result)=>{
    console.log(result);
    
  });

  //client.close();
});