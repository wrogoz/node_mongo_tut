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

    
//     db.collection('users').findOne( {_id:ObjectID("5dbaacf6ec03c06a29fe2a0d")} , (error,user)=> {
//         if(error){
//             return console.log('unable to find ')
//         }
//         console.log(user)
//     })

// db.collection('users').find({age:34}).toArray((error,users)=>{
//     if(error){
//         return console.log('efwef')
//     }
//     console.log(users)
// })

    db.collection('toDo').findOne({_id: ObjectID("5dbaaff11b389d6aa7123b67")},(err,res)=>{
        if(err){
            return console.log('error')
        }
        console.log(res)
    })

    db.collection('toDo').find({completed:false}).toArray((err,res)=>{
        console.log(res)
    })

  
})



