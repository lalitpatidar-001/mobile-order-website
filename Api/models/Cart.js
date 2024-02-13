const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    specsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Specs"
    },
    quantity:{
        type:Number,
        default:1
    }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Cart",CartSchema);