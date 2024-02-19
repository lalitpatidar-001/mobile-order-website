const router = require("express").Router();
const { placeNewOrder, getAllOrders, cancelOrder, getOrder } = require("../controllers/order");

router.post("/place-order",placeNewOrder); 
router.get("/all-orders/:userId",getAllOrders); 
router.get("/get-order/:orderId",getOrder); 
router.put("/cancel-order/:orderId",cancelOrder); 

module.exports = router;