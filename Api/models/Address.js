const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    name:{type:String,required:true},
    contact:{type:String , required:true},
    city:{type:String,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    area:{type:String,required:true},
    pincode:{type:Number,required:true},
    },
    {timestamps:true}
);

module.exports = mongoose.model("Address",AddressSchema);