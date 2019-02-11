const {MongoClient, ObjectId} = require('mongodb');
 
// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client) {

  if (err) {
      return console.log('Unable to connect to mongo db server.');
  }
  console.log("Connected successfully to server");
 
  const db = client.db('TodoApp');
  
  //Delete Many---------------------------------------
//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
//     console.log(result);  
//   });
    //Users----------------
    // db.collection('Users').deleteMany({name:'Riham'}).then((result)=>{
    //     console.log(result);
        
    // });
 
  //Delete One---------------------------------------
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//       console.log(result);
//   });

    db.collection('Users').findOneAndDelete({ _id : ObjectId("5c617cb99c8803d8927cb17c") }).then((result)=>{
        console.log(JSON.stringify(result,undefined, 2));
        
    });

  //Find one and Delete ---------------------------------------
//   db.collection('Todos').findOneAndDelete({complete:false}).then((result)=>{
//     console.log(result);
    
//   });


  //client.close();
});