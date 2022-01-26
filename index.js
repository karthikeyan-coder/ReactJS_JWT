import express from 'express'
import { register } from './router.js';
import mongoose from 'mongoose'
const app = express();
app.use(express.json())
app.use('/api',register)
const URL = 'mongodb://localhost:27017/demo'
mongoose.connect(URL,()=>{
    console.log('DB connected')
})
app.listen(5000,()=>{
    console.log('localhost running')
})