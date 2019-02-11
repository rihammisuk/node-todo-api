const {MongoClient, ObjectID} = require('mongodb');
 
// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {

  if (err) {
      return console.log('Unable to connect to mongo db server.');
  }
  console.log("Connected successfully to server");
 
  const db = client.db('TodoApp');

//Todo Fetch------------------------------------------------
  // db.collection('Todos').find({complete: false}).toArray().then( (docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) =>{
  //     console.log('Unable to fetch todos',err);
      
  // } );


//Todo Count------------------------------------

//  db.collection('Todos').find().count().then( (count)=>{
//     console.log(JSON.stringify(`Todo count : ${count}`));
//   },(err) =>{
//       console.log('Unable to fetch todos',err);
      
//   } );

//Users Fetch

  db.collection('Users').find({name:'Riham'}).toArray().then((docs) =>{
    console.log('User ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch data');
    
  });
 
  //client.close();
});