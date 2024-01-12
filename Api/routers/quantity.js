const { increaseQuantity, decreaseQuantity } = require('../controllers/quantity');

const router = require('express').Router();

router.post("/increase/:id",increaseQuantity);
router.post("/decrease/:id",decreaseQuantity);

module.exports = router;