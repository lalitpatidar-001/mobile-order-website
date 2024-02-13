const router = require("express").Router();
const { addToCart, removeCartItem, getCartItems, getCartItem, getCartPriceDetail, getCartCount } = require("../controllers/cart");

router.post("/add/:id",addToCart);
router.delete("/remove/:id",removeCartItem);
router.get("/getall/:id",getCartItems);
router.post("/get/:id",getCartItem);
router.get("/details/:id",getCartPriceDetail);
router.get("/count/:id",getCartCount);

module.exports = router