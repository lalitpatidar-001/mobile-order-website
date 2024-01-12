

const getUser = async(req,res)=>{
    console.log("in get user");
    return res.status(200).json("all ok")

}

module.exports ={
    getUser,
}