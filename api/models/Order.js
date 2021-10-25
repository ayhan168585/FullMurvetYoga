const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    yogas: [
        {
            yogaId:{type:String},
            quantity:{type:Number,default:1},
        },
    ],
   

  amount:{type:Number,required:true},
  status:{type:String,default:"İsteğiniz işleme konuyor"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);