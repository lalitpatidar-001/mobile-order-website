const { createSpecs } = require('../controllers/specs');
const { specsValidationRules, handleSpecsValidationRules } = require('../validators/specs');

const router = require('express').Router();

router.post("/create",
    specsValidationRules,
    handleSpecsValidationRules,
    createSpecs);

module.exports = router;