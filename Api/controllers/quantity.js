const Cart = require("../models/Cart");


const increaseQuantity= async(req,res)=>{
    const cartId = req.params.id;
    try{
        const cart = await Cart.findById(cartId);
        console.log(cart)
        if(!cart) return res.status(404).json({msg:"cart not found"});
        if(cart.quantity >= 5) return res.status(422).json({msg:"quantity at maximum",isIncreased:false});
        else{
            const updatedCart = await Cart.findByIdAndUpdate(cartId,{ $inc: { quantity: 1 }},{new:true});

            return res.status(200).json({msg:"quantity increased",isIncreased:true,quantity:updatedCart.quantity,updatedCart});
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
};


const decreaseQuantity= async(req,res)=>{
    const cartId = req.params.id;
    

    try{
        const cart = await Cart.findById(cartId);
        console.log(cart)
        if(!cart) return res.status(404).json({msg:"cart not found"});
        if(cart.quantity <= 1) return res.status(422).json({msg:"quantity at minimum",isDecreased:false});
        else{
            const updatedCart = await Cart.findByIdAndUpdate(cartId,{ $inc: { quantity: -1 }},{new:true});

            return res.status(200).json({msg:"quantity decreased",isDecreased:true,quantity:updatedCart.quantity,updatedCart});
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
};


module.exports={
    increaseQuantity,
    decreaseQuantity
}