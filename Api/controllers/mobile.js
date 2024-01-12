const Mobile = require('../models/Mobile');
const Specs = require('../models/Specs');

const createMobile = async (req, res) => {
    const mobile = req.body;

    try {
        const modelExists = await Mobile.findOne({ modelNumber: mobile.modelNumber });
        if (modelExists) return res.status(409).json({ msg: "model number already exists" });

        const savedMobile = await Mobile.create(mobile);
        return res.status(201).json({ msg: "mobile created successfully", savedMobile });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
};

const getAllMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        // Array to store the combined data for each mobile
        const combinedMobiles = [];
        // Iterating through each mobile
        for (const mobile of mobiles) {
            // iterating for number of times specs 
            for (const spec of mobile.specs) {
                // getting data for each specs
                const specData = await Specs.findById(spec._id);

                // creating object from combined object
                const combinedData = {
                    // from mobile schema
                    _id: mobile._id,
                    modelNumber: mobile.modelNumber,
                    modelName: mobile.modelName,
                    brand: mobile.brand,
                    display: mobile.display,
                    frontCamera: mobile.frontCamera,
                    backCamera: mobile.backCamera,
                    battery: mobile.battery,
                    processor: mobile.processor,
                    os: mobile.os,
                    specs: mobile.specs,

                    // from specs schema
                    specId: spec._id,
                    ram: specData.ram,
                    rom: specData.rom,
                    price: specData.price,
                    actualPrice: specData.actualPrice,
                    stocks: specData.stocks,

                };

                // Adding the combined data object to the array for each specs 
                combinedMobiles.push(combinedData);
            }
        }
        shuffleArray(combinedMobiles)
        return res.status(200).json({ combinedMobiles });
    } catch (error) {
        console.error("Error in getAllMobiles:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
};



const getMobile = async (req, res) => {
    try {
        const mobileId = req.params.id;
        let { ram, rom } = req.query;
        // console.log("called")
        // console.log("req,query  ", req.query)
        // console.log("ram->" ,ram , "rom->",rom)
        rom=  parseInt(rom);
        ram=  parseInt(ram);
        // console.log(ram , " " ,rom)
        // Find the mobile document by ID
        const mobile = await Mobile.findOne({ _id: mobileId });

        // Filter specs based on the provided RAM and ROM
        const matchingSpecs = mobile.specs.filter((spec) => {
            // console.log(spec.ram , ram)
            return spec.ram === ram  && spec.rom === rom;
        });
        if (matchingSpecs.length === 0) {
            // If no matching spec is found, return a 404 response
            return res.status(404).json({ msg: "No matching specs" });
        }

        // Retrieve the first matching spec from the array
        const matchedSpec = await Specs.findById(matchingSpecs[0]._id);

        // Combine mobile data with specs data
        const combinedData = {
            ...mobile.toObject(),
            ...matchedSpec.toObject(),
            specId:matchedSpec._id,
        };

        // Return the combined data in the response
        return res.status(200).json({ msg: "Data fetched successfully", combinedData });
    } catch (error) {
        console.error("Error in getMobile:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
};



module.exports = {
    createMobile,
    getMobile,
    getAllMobiles,
};


// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}