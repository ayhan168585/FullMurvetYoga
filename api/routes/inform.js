const Inform=require("../models/Inform");
const {verifyTokenAndAdmin} =require("./verifyToken")

const router=require("express").Router();

//CREATE

router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newInform=new Inform(req.body);
    try {
        const savedInform=await newInform.save();
        res.status(200).json(savedInform);
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
  
    try {
        const updatedInform= await Inform.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedInform);
    } catch (err) {
        res.status(500).json(err)
    }
 });
 
 //DELETE
 
 router.delete("/:id",verifyTokenAndAdmin,async (req,res)=>{
     try {
         await Inform.findByIdAndDelete(req.params.id);
         res.status(200).json("Bilgi silindi!");
     } catch (err) {
         res.status(500).json(err);
     }
 });
 
 //GET INFORM
 
 router.get("/find/:id",async (req,res)=>{
     try {
         const inform=await Inform.findById(req.params.id);
         res.status(200).json(inform._doc);
     } catch (err) {
         res.status(500).json(err);
     }
 });
 
 //GET ALL INFORMS
 
 router.get("/", async (req,res)=>{
     const query=req.query.new
     try {
        const informs=query? await Inform.find().sort({_id:-1}).limit(5):await Inform.find();
        res.status(200).json(informs);
     } catch (err) {
         res.status(500).json(err);
     }
 });


module.exports=router;

