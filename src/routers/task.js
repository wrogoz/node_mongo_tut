const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/task',async (req, res) => {
  
    try {
        const task = new Task(req.body)

        await task.save();
        res.status(201).send(task)
    } catch (error) {
        console.log(`dupa`)
    }
   
});

router.get('/task',async (req, res) => {

    const tasks = await Task.find({})
    try {
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send()
    }

    
});

router.get('/task/:id',async (req, res) => {
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
router.patch('/tasks/:id',async (req, res) => {
        const allowedUpdates = ['description','completed'];
        const updates = Object.keys(req.body);
        const isValid = updates.every((update)=>{
            return allowedUpdates.includes(update)
        }); 
        if(isValid === false){
            return res.status(400).send({error:"wrong data"})
        }
    try {
        const task = await Task.findById(req.params.id);
        updates.forEach((el)=>{
            task[el]=req.body[el]
        })
        await task.save();

        if(!task){
            return res.status(404).send()

            
        }
        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
});

router.delete('/tasks/:id', async(req, res)=> {
    try {
        const user = await Task.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).send()
    }
    res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

router.get('/users/:id',(req,res)=>{
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


module.exports = router;