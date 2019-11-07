const express = require('express');
const app = express();

require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const port = process.env.PORT || 3000;
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(()=>{
        res.send(user)
    }).catch(err=>{
        res.status(400).send('dupa')
        
    });
});

app.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
            
    }).catch(err=>{
        res.status(500).send()
    })
})

app.get('/users',(req,res)=>{
    User.find({ }).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send()
    })
})


app.post('/task', (req, res) => {
    const task = new Task(req.body)
   task.save().then(()=>{
       console.log('everything is ok')
       res.status(201).send(task)
   }).catch(()=>{
       console.log('dupa blada')
   })
});

app.get('/task', (req, res) => {
    Task.find({}).then(tasks=>{
        res.status(200).send(tasks)
    }).catch(()=>{
        res.status(500).send()
    })
});

app.get('/task/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task)=>{
        if(!task){
          
            return res.status(404).send();
        }
        res.send(task)
    }).catch((err)=>{
        res.status(500).send()
    })
});
app.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
            
    }).catch(err=>{
        res.status(500).send()
    })
})



app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})