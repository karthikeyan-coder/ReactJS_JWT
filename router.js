import express from 'express'
const router = express.Router();
import bcrypt from 'bcryptjs'
import{model}  from './schema.js'
export const register = router.post('/register',async(req,res)=>{
    const encryptedPassword = await bcrypt.hash(req.body.password,10)
    const validmail =  await model.findOne({email:req.body.email})
    if(validmail)
    {
        return res.status(400).json('email already exist')
    }
    const newUser = new model({
        Name : req.body.Name,
        email : req.body.email,
        password : encryptedPassword
    })
    const saveUser = await newUser.save()
    res.json(saveUser)
})

