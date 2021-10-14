const Activity =require("../models/Activity");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE

router.post("/",verifyTokenAndAdmin, async (req,res)=>{
const newActivity=new Activity(req.body)

try {
    const savedActivity=await newActivity.save();
    res.status(200).json(savedActivity);
} catch (err) {
    res.status(500).json(err)
}
});

//UPDATE

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
  
   try {
       const updatedActivity= await Activity.findByIdAndUpdate(req.params.id,{
           $set:req.body
       },{new:true})
       res.status(200).json(updatedActivity);
   } catch (err) {
       res.status(500).json(err)
   }
});

//DELETE

router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{
    try {
        await Activity.findByIdAndDelete(req.params.id);
        res.status(200).json("Etkinlik silindi!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ACTIVITY

router.get("/find/:id",async (req,res)=>{
    try {
        const activity=await Activity.findById(req.params.id);
        res.status(200).json(activity._doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL ACTIVITIES

router.get("/",async (req,res)=>{
    const qNew=req.query.new
    const qType=req.query.type
    try {
        let activities;
        if (qNew) {
            activities=await Activity.find().sort({createdAt:-1}).limit(5);
        }else if(qType){
            activities=await Activity.find({
                activitytype:{
                    $in:[qType],
                },
            });
        }
        else{
            activities=await Activity.find();
        }
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports=router