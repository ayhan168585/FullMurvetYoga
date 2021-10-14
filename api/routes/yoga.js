const Yoga =require("../models/Yoga");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE

router.post("/",verifyTokenAndAdmin, async (req,res)=>{
const newYoga=new Yoga(req.body)

try {
    const savedYoga=await newYoga.save();
    res.status(200).json(savedYoga);
} catch (err) {
    res.status(500).json(err)
}
});

//UPDATE

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
  
   try {
       const updatedYoga= await Yoga.findByIdAndUpdate(req.params.id,{
           $set:req.body
       },{new:true})
       res.status(200).json(updatedYoga);
   } catch (err) {
       res.status(500).json(err)
   }
});

//DELETE

router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{
    try {
        await Yoga.findByIdAndDelete(req.params.id);
        res.status(200).json("Yoga silindi!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET YOGA

router.get("/find/:id",async (req,res)=>{
    try {
        const yoga=await Yoga.findById(req.params.id);
        res.status(200).json(yoga._doc);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL YOGAS

router.get("/",async (req,res)=>{
    const qNew=req.query.new
    const qType=req.query.type
    try {
        let yogas;
        if (qNew) {
            yogas=await Yoga.find().sort({createdAt:-1}).limit(5);
        }else if(qType){
            yogas=await Yoga.find({
                yogatype:{
                    $in:[qType],
                },
            });
        }
        else{
            yogas=await Yoga.find();
        }
        res.status(200).json(yogas);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports=router