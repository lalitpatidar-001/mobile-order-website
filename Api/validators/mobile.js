const {check , validationResult} = require('express-validator');

const mobileValidationRules = [
    check("modelNumber").notEmpty()
        .withMessage("model number can not be empty")
        .isLength({min:6 , max:15}),
    check("modelName").notEmpty()
        .withMessage("model name can not be empty"),
    check("brand").notEmpty()
        .withMessage("brand can not be empty"),
    check("display").notEmpty()
        .withMessage("display can not be empty"),
    check("backCamera").notEmpty()
        .withMessage("backCamera can not be empty"),
    check("battery").notEmpty()
        .withMessage("battery can not be empty"),
    check("processor").notEmpty()
        .withMessage("processor can not be empty"),
    check("os").notEmpty()
        .withMessage("os can not be empty"),
]

const handleMobileValidationRules = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
        return res.status(400).json({errors:errors.array(),msg:"server side validation errors"});

    next();
};

module.exports ={
    mobileValidationRules,
    handleMobileValidationRules,
    
}