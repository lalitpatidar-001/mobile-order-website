const { createMobile, getMobile, getAllMobiles, getFilteredMobile } = require("../controllers/mobile");
const { mobileValidationRules, handleMobileValidationRules } = require("../validators/mobile");

const router = require("express").Router();

router.post("/create",mobileValidationRules,handleMobileValidationRules,createMobile);
router.get("/get/:id",getMobile);
router.get("/getall",getAllMobiles);
router.get("/filtered",getFilteredMobile);

module.exports = router