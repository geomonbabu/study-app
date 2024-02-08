const express= require("express")
const router=express.Router()
const classmodel=require("../models/ClassModel")

router.post("/addcourse",async(req,res)=>{
    let data = req.body //read values
    let classes = new classmodel(data)
    let result = await classes.save()
    res.json({
        status:"success"
    })
})
router.get("/viewcourse",async(req,res)=>{
    let output = await classmodel.find()
    res.json({
        output
    })
})
router.post("/searchcourse",async(req,res)=>{
    let data = req.body //read values
    let output = await classmodel.find(data)
    res.json({
        output
    })
})
module.exports=router