const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    specsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Specs"
    },
    quantity:{
        type:Number,
        default:1
    },
    status:{
        type:String,
        enum:["Pending","Delivered","Cancelled"],
        required:true
    },
    paymentStatus:{
        type:Boolean,
        default:false,
        required:true
    },
    paymentMode:{
        type:String,
        enum:["UPI","COD","NetBanking","Card"],
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    },
    deliveryAddress:{
        type:mongoose.Schema.ObjectId,
        ref:"Address",
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Order",OrderSchema);