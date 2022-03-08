const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')
const DB = 'mongodb+srv://Montage_Website:valorant@cluster0.dmavh.mongodb.net/Montage_Website?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser:true
}).then(()=>{
    console.log('Connection Successfull')
}).catch((err) =>console.log('Connection failed'))

const User = require('./userSchema')

app.get('/', (req,res)=>{
    res.send(`Usama Billionaire`)
})


app.post('/', async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"Please fill the required field"})
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exists"})
        }

        const user = new User({name,email,password})
        await user.save()
        res.status(201).json({message:"Registration Successfull"})
    }catch(err){
        console.log(err)
    }
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})

