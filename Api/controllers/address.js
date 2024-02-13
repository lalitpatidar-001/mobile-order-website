const Address = require("../models/Address");


// add address
const addAddress = async (req,res)=>{
    const userId = req.params.id;
    const address = req.body;

    try {
        const newAddress = new Address({
            userId:userId,
            name:address.name,
            contact:address.contact,
            city:address.city,
            district:address.district,
            state:address.state,
            area:address.area,
            pincode:address.pincode
        });

        const savedAddress = await newAddress.save();
        return res.status(201).json({msg:"address added",addressId:savedAddress._id});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
}

const getAllAddress = async(req,res)=>{
    console.log("get address called")
    const userId = req.params.id;
    try {
        const address = await Address.find({userId});         
        return res.status(200).json({msg:"address retrieved",address})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
}

module.exports = {
    getAllAddress,
    addAddress
}
