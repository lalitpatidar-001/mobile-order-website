const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,

    },
    password:{
        type:String,
        require:true
    },
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
},
    {timestamps:true}
);

module.exports  = mongoose.model("User",UserSchema);
