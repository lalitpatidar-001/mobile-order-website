const Cart = require("../models/Cart");
const Specs = require("../models/Specs");
const User = require("../models/User");
const Mobile = require("../models/Mobile");

const addToCart = async (req, res) => {
    const { specId } = req.body;

    const userId = req.params.id;
    try {
        const cart = new Cart({
            userId: userId,
            specsId: req.body.specId
        });

        const savedCart = await cart.save();

        return res.status(201).json({ msg: "added to cart", savedCart })

    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }
}

const removeCartItem = async (req, res) => {
    const cartId = req.params.id;
    console.log("cartId", cartId)

    try {
        const cartItem = await Cart.findById(cartId);
        console.log("cartItem", cartItem)
        if (!cartItem) return res.status(404).json({ msg: "cart not found" });

        const deleted = await Cart.findByIdAndDelete(cartId);
        console.log("deleted", deleted)
        return res.status(200).json({ msg: "cart deleted", cartDeleted: true })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" })
    }
}

const getCartItems = async (req, res) => {
    const userId = req.params.id;
    try {
        const cartItems = await Cart.find({ userId: userId });

        if (cartItems.length === 0) return res.status(200).json({ cartMobiles: cartItems });

        const cartMobiles = [];
        for (const cart of cartItems) {
            let combineMobile = {}
            const spec = await Specs.findById(cart.specsId);
            const mobile = await Mobile.findOne({ modelNumber: spec.modelNumber });
            combineMobile = {
                ...mobile.toObject(),
                ...spec.toObject(),
                mobileId: mobile._id,
                cartId: cart._id,
                quantity: cart.quantity,
            }
            cartMobiles.push(combineMobile)
        };
        return res.status(200).json({ msg: "cart items retrieved", cartMobiles });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" })
    }
}

const getCartItem = async (req, res) => {
    const userId = req.params.id;
    const { specId } = req.body;
    console.log(userId)
    console.log(specId)
    try {
        const cart = await Cart.findOne({ userId: userId, specsId: specId });
        console.log("cart", cart)
        if (!cart) return res.status(404).json({ msg: "not added to cart", isInCart: false })

        return res.status(200).json({ msg: "item exist in cart ", isInCart: true })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" })
    }
}

const getCartPriceDetail = async (req, res) => {
    const userId = req.params.id;
    console.log("called ", userId)
    try {
        const details = {
            items: 0,
            price: 0,
            discount: 0,
            totalAmount: 0,
            save:0,
        }
        const cartItems = await Cart.find({ userId: userId });
        if (cartItems.length === 0) return res.status(200).json({ msg: "cart is empty",  details });

        for (const cart of cartItems) {
            const spec = await Specs.findById(cart.specsId);
            
            details.items += 1; // item count

            details.price += (spec.actualPrice * cart.quantity); // original price

            details.discount += ((spec.actualPrice - spec.price) * cart.quantity); // total discount

            details.totalAmount += (spec.price * cart.quantity); // total pay price

        };
        
        return res.status(200).json({msg:"price detail retrieved",details})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"internal server error"})
    }

}

const getCartCount =async(req,res)=>{
    const userId = req.params.id;
    try{
        const cartCount = await Cart.find({userId:userId}).countDocuments();
        return res.status(200).json({msg:"item count retrieved",cartCount});
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
}

module.exports = {
    addToCart,
    removeCartItem,
    getCartItems,
    getCartItem,
    getCartPriceDetail,
    getCartCount,
}