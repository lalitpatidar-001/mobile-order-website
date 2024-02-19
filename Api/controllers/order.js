const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Mobile = require("../models/Mobile")


const placeNewOrder = async (req, res) => {
    const { userId, paymentMode, paymentStatus, deliveryAddress } = req.body;

    if (!userId || !paymentMode || paymentStatus === undefined || !deliveryAddress) {
        return res.status(400).json({ message: "invalid data" });
    }

    try {
        const cartItems = await Cart.find({ userId });

        if (cartItems.length <= 0) {
            return res.status(404).json({ message: "no items in cart" });
        }

        const savedOrders = [];

        for (const cart of cartItems) {
            const deliveryDate = new Date(Date.now() + (3 * 24 * 60 * 60 * 1000)); // Adding 3 days (in milliseconds) to current date
            const newOrder = new Order({
                userId,
                specsId: cart.specsId,
                quantity: cart.quantity,
                status: "Pending",
                paymentStatus,
                paymentMode,
                deliveryDate, 
                deliveryAddress
            });

            const savedOrder = await newOrder.save();
            await Cart.findByIdAndDelete(cart._id);
            savedOrders.push(savedOrder);
        }

        return res.status(201).json({ message: "order placed successfully", data: savedOrders });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error", data: error });
    }
};


const getAllOrders = async (req,res)=>{
    const {userId} = req.params;
    if(!userId) return res.status(400).json({message:"invalid data"});
    try {
        const orders = await Order.find({userId}).sort({createdAt:-1}).populate("specsId","_id price ram rom modelNumber");

        // adding mobiles details for each specs
        const combinedOrders = [];
        for(const order of orders){
            const modelNumber = order.specsId.modelNumber
            console.log("specsId",order.specsId)
            console.log("modelNumber",modelNumber)
            const mobile = await Mobile.findOne({modelNumber}).select("_id modelName");
            console.log("mobile",mobile)
            const oneOrder = {
                ...order.toObject(), // Convert Mongoose Document to plain JS object
                mobile
            }
            combinedOrders.push(oneOrder)
    
        }
        return res.status(200).json({message:"orders rerived",data:combinedOrders})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }

}

const cancelOrder  = async(req,res)=>{
    const {orderId} = req.params;
    if(!orderId){
        return res.status(404).json({message:"invalid data"});
    }

    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId,{status:"Cancelled"},{new:true});
        return res.status(200).json({message:"order cancelled successfully",data:updatedOrder});
    } catch (error) {
        console.log(error)
    }
}

const getOrder = async (req,res)=>{
    const {orderId} = req.params;
    if(!orderId) return res.status(404).json({message:"invalid data"})
    try {
        const order = await Order.findById(orderId).populate("deliveryAddress");
        if(!order) return res.status(404).json({message:"order not found"});
        return res.status(200).json({message:"order retrieved successfully",data:order})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    placeNewOrder,
    getAllOrders,
    cancelOrder,
    getOrder
}