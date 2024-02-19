const router = require("express").Router();
const {addNewReview, getAllReviews, addReply} = require("../controllers/review")

router.post("/add-review",addNewReview); 
router.post("/add-reply/:reviewId",addReply); 
router.get("/get-reviews/:specsId",getAllReviews);

module.exports = router