const mongoose  = require('mongoose');

const SpecsSchema = new mongoose.Schema({
    modelNumber:{
        type:String,
        required:true,
    },
    ram:{
        type:Number,
        required:true,
    },
    rom:{
        type:Number,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    actualPrice:{
        type:String,
        required:true,
    },
    stocks:{
        type:Number,
        required:true,
    }
},{timestamps:true});

module.exports = mongoose.model('Specs',SpecsSchema);