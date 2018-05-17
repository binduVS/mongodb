const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
 {
   return console.log("unable to connect");
 }
const db = client.db('TodoApp')
 console.log('connected to server successfully');
 //db.collection('todos').insertOne({
   //  text : 'todo something',
     //completed : false
// },(err,result)=>{
  //  if(err){
    //    return console.log("unable to insert",err);
 //    }
   //  console.log(JSON.stringify(result.ops,undefined,2))
 //});
     db.collection('todos').find({name : bindu}).toArray().then(
       (docs)=>{
       console.log('todos');
       console.log(JSON.stringify(docs,undefined,2))},
       (err)=>{
         console.log('unable to fetch details',err);
       });
       client.close();
});


