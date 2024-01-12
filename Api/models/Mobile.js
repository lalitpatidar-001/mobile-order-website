const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    modelNumber: {
        type: String,
        unique: true,
        required: true,
    },
    modelName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    display: {
        type: String,
        required: true
    },
    frontCamera: {
        type: String,
    },
    backCamera: {
        type: String,
        required: true,
    },
    battery: {
        type: Number,
        required: true,
    },
    processor: {
        type: String,
        required: true,
    },
    os: {
        type: String,
        required: true,
    },
    specs: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Specs' },
        ram: Number,
        rom:Number,
      }]
},
{ timestamps: true });

module.exports = mongoose.model('Mobile', MobileSchema);