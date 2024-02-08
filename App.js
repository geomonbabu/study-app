const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const classrouter = require("./controllers/ClassRouter")

//aliasname
const classes=express()

//middleware
classes.use(express.json())
classes.use(cors())
mongoose.connect("mongodb+srv://megeomonbabu:geo12345@cluster0.i1dx7ax.mongodb.net/classesdb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

//routing or api
classes.use("/api/classes",classrouter)

classes.listen(3002,()=>{
    console.log("server is running")
})