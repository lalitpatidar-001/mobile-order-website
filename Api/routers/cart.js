const router = require("express").Router();
const { addToCart, removeCartItem, getCartItems, getCartItem } = require("../controllers/cart");

router.post("/add/:id",addToCart);
router.delete("/remove/:id",removeCartItem);
router.get("/getall/:id",getCartItems);
router.post("/get/:id",getCartItem);

module.exports = router