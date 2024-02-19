const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    specsId:{
        type:mongoose.Schema.ObjectId,
        ref:"Specs"
    },
    text: {
        type: String,
        required: true
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review' // Reference to another comment in the same collection
    }]
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
