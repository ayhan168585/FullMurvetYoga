const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
  {
    activityname: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String },
    img: { type: String },
    activitytype:{type:Array},
    activitydate: { type: Array },
    startingtime: { type: String },
    endingtime: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);

module.exports=mongoose.model("Activity",ActivitySchema);
