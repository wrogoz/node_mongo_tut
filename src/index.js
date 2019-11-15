const express = require('express');
const app = express();
require('./db/mongoose');
const userRouter =require('./routers/user');
const taskRouter =require('./routers/task');




const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);




app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})



const bcrypt = require('bcryptjs')

const myFunction = async()=>{
    const password = 'red12345'
    const hashedPassword = await bcrypt.hash(password,8)



    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345', hashedPassword);
    console.log(isMatch)

}

myFunction()

