const router = require('express').Router();
const {registerValidationRules,handleValidationResult, loginValidationRules}  = require('../validators/auth');
const { registerUser, loginUser } = require('../controllers/auth');

router.post(
    '/register',
    registerValidationRules, 
    handleValidationResult,
    registerUser,
);
router.post(
    '/login',
    loginValidationRules, 
    handleValidationResult,
    loginUser,
);

module.exports = router