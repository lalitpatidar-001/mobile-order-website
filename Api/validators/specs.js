const { check, validationResult } = require('express-validator');

const specsValidationRules = [
    check("modelNumber").notEmpty()
        .withMessage("model number can not be empty")
        .isLength({ min: 6, max: 15 }).withMessage("model number length should be 6 to 15 charachter long only")
        .isString().withMessage("model number should be a string"),
    check("ram")
        .isNumeric().withMessage("ram should be in number")
        .notEmpty().withMessage("ram can not be empty"),
    check("rom").notEmpty().withMessage("rom can not be empty")
        .isNumeric().withMessage("rom should be in number"),
    check("price").notEmpty().withMessage("price can not be empty")
        .isString().withMessage("price should be a string"),
    check("actualPrice")
        .notEmpty().withMessage("actualPrice can not be empty")
        .isString().withMessage("model number should be a string"),
    check("stocks")
        .notEmpty().withMessage("stocks can not be empty")
        .isNumeric().withMessage("stocks should be a number"),

];

const handleSpecsValidationRules = (req, res, next) => {
    const errors = validationResult(req);

    console.log("in validation result");
    console.log(req.body);
    if (!errors.isEmpty())
        return res.status(400).json({ msg: "server validation errors", errors: errors.array() });

    next();
};

module.exports = {
    handleSpecsValidationRules,
    specsValidationRules,

}