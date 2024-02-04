const mongoose=require("mongoose");

const usersSchema=new mongoose.Schema({
    company:String,
    job_tilte:String,
    email:String,
    salary:String
});

module.exports=mongoose.model("users",usersSchema);