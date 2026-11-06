const mongo=require("mongoose")
const mySchema=new mongo.Schema({
    name:String,
    email:String,
    number:Number
})

const mymodel=mongo.model("mern1112",mySchema)
module.exports=mymodel