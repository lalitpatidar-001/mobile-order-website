const { addAddress, getAllAddress } = require("../controllers/address");

const router = require("express").Router();

router.post("/add/:id",addAddress);
router.get("/get/:id",getAllAddress);

module.exports = router