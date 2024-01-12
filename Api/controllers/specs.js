const Mobile = require("../models/Mobile");
const Specs = require("../models/Specs");

const createSpecs = async (req, res) => {
    const specs = req.body;
    console.log(specs);
    try {
        const mobile = await Mobile.findOne({ modelNumber: specs.modelNumber });
        if (!mobile) return res.status(404).json({ msg: "model number not found" });

        const savedSpecs = await Specs.create(specs);

        // Add the new specs to the existing mobile document
        const updatedMobile = await Mobile.findByIdAndUpdate(
            mobile._id,
            {
                $push: {
                    specs: {
                        _id: savedSpecs._id,
                        ram: savedSpecs.ram,
                        rom:savedSpecs.rom,
                    },
                },
            },
            { new: true }
        );

        return res
            .status(201)
            .json({ msg: "specs created successfully", savedSpecs, updatedMobile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "internal server error" });
    }
};

module.exports = {
    createSpecs,
};
