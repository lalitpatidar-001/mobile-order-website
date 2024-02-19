const Review = require("../models/Review");

const addNewReview = async(req,res)=>{
    const {text,userId,specsId} = req.body;
    console.log("add nwe review called ",req.body)
    if(!text || !userId || !specsId){
        return res.status(400).json("invalid data");
    }
    try {
        const newReview = new Review({
            userId,
            specsId,
            text
        });
        const savedReview = await newReview.save();

        return res.status(201).json({message:"review created successfully",savedReview});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"});
    }
 
};

// get all review of single mobile
const getAllReviews = async (req, res) => {
    const { specsId } = req.params;
    console.log("get all reviews called", specsId)
    if (!specsId)
        return res.status(400).json({ message: "Invalid data" });

    try {
        // Populate 'replies' field when querying for reviews
        const reviews = await Review.find({ specsId }).sort({ createdAt: -1 }).populate('userId').populate('replies');

        // Function to recursively populate replies
        const populateReplies = async (review) => {
            // Recursively populate replies of replies
            for (let i = 0; i < review?.replies?.length; i++) {
                const reply = review.replies[i];
                if (!reply.populate) {
                    // If reply is not a Mongoose document, cast it
                    review.replies[i] = await Review.findById(reply._id).populate('userId', 'username _id');
                }
                await populateReplies(review.replies[i]);
            }
        };

        // Populate replies for each review
        for (const review of reviews) {
            await populateReplies(review);
        }

        return res.status(200).json({ message: "All reviews retrieved", reviews });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const addReply = async (req,res)=>{
    const {reviewId} = req.params;
    const {userId,text} = req.body;

    if(!reviewId) return res.status(400).json({message:"invalid data"});

    try {
        const review = await Review.findById(reviewId);
        if(!review) return res.status(404).json({message:"review not found"});

        const newReply= new Review({
            userId,
            specsId:review.specsId,
            text
        });

        const savedReply = await newReply.save();

        review.replies.push(savedReply._id);
        await review.save();
        return res.status(201).json({message:"reply added successfully"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }
}

module.exports = {
    addNewReview,
    getAllReviews,
    addReply
}