const mongoose = require("mongoose");

const YogaSchema = new mongoose.Schema(
  {
    yoganame: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    video:{type:String},
    yogatype: { type: Array },
    applicationtype:{type:Array},
    price: { type: Number, required: true },
    level:{type:Array}
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Yoga", YogaSchema);
