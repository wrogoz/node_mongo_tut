// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient,ObjectID}=require('mongodb');




const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task_app';




MongoClient.connect(connectionURL,{useNewUrlParser:true },(error,client)=>{
    if(error){
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName);

   db.collection('toDo').deleteOne({
       description:'wash a car'
   }).then(res=>{
       console.log('item deleted')
   }).catch(err=>{
       console.log(err)
   })
})



