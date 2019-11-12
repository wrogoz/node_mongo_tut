const express = require('express');
const app = express();

require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const port = process.env.PORT || 3000;
app.use(express.json())

app.post('/users',async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e){
        res.status(400).send(e)
    }

});

app.get('/users/:id',async (req,res)=>{
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send()

    } catch (error) {
        res.status(404).send()
    }

   
})

app.patch('/users/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age'];
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(isValidOperation === false){
        res.status(400).send({error:'invalid updates'})
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true})
        if(!user){
            return res.status('404').send();
        }
        res.send(user)

    } catch (e) {
        res.status('400').send();

    }
})

app.get('/users',async (req,res)=>{
 
 try{
   const users = await User.find({})
    res.send(users)
 }catch(e){
    res.status(500).send()
 }
 
  
})


app.post('/task',async (req, res) => {
  
    try {
        const task = new Task(req.body)

        await task.save();
        res.status(201).send(task)
    } catch (error) {
        console.log(dupa)
    }
   
});

app.get('/task',async (req, res) => {

    const tasks = await Task.find({})
    try {
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send()
    }

    
});

app.get('/task/:id',async (req, res) => {
    const _id = req.params.id;

    const task = await Task.findById(_id)
    try {
        if(!task){
            res.status(404).send()
            res.status(200).send(task)
        }
    } catch (error) {
        res.status(500).send()
    }

   
// Task.findById(_id).then((task)=>{
//         if(!task){
          
//             return res.status(404).send();
//         }
//         res.send(task)
//     }).catch((err)=>{
//         res.status(500).send()
//     })
});
app.patch('/tasks/:id',async (req, res) => {
        const allowedUpdates = ['description','completed'];
        const updates = Object.keys(req.body);
        const isValid = updates.every((update)=>{
            return allowedUpdates.includes(update)
        }); 
        if(isValid === false){
            return res.status(400).send({error:"wrong data"})
        }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

        if(!task){
            return res.status(404).send()

            
        }
        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
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