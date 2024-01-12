const { getUser } = require('../controllers/user');
const { verifyAccessToken } = require('../utils/token');

const router = require('express').Router();

router.get("/getuser",verifyAccessToken ,getUser);

module.exports = router