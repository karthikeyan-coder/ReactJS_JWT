import mongoose from "mongoose";

const schema = mongoose.Schema({
    Name : {
        type : String,
        required  :true
    },
    email : {
        type : String,
        required  :true
    },
    password : {
        type : String,
        required  :true
    }
})

export const model = mongoose.model('profiles',schema)