/*
    validation rules to validate request parameters
    validating req and sending response
*/

// validations
const { check, validationResult } = require('express-validator');

const loginValidationRules = [
    check('email').notEmpty()
        .withMessage("email can not be empty")
        .isEmail().withMessage("invalidEmail"),
    check('password').notEmpty()
        .withMessage("password can not be empty"),
];

const registerValidationRules = [
    ...loginValidationRules,
    check('username').notEmpty()
        .withMessage('name can not be empty')
        .isLength({ max: 50 })
        .withMessage("name can not be greater than 50 characters"),
    check('password').notEmpty()
        .withMessage("password can not be empty")
        .isLength({min:8 , max:14}).withMessage("password lenght should be 8 to 14"),
];


// middleware to handel errors
const handleValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    next(); // no error
};



module.exports = {
    loginValidationRules,
    registerValidationRules,
    handleValidationResult,

};

