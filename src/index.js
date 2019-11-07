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

app.post('/task', (req, res) => {
    const task = new Task(req.body)
   task.save().then(()=>{
       console.log('everything is ok')
       res.send(task)
   }).catch(()=>{
       console.log('dupa blada')
   })
});


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})