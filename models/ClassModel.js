const mongoose=require("mongoose")

const ClassSchema = new mongoose.Schema(
    {
        Coursename:String,
        description:String,
        tutorname:String,
        duration:String,
        fees:String,
    }
)
module.exports=mongoose.model("classes",ClassSchema)