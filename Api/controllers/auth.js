const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const crypto = require('crypto-js');
const { encryptString, decryptString } = require('../utils/encryptAndDecrypt');
const jwt = require('jsonwebtoken');
const cookie = require("cookie-parser");
const { generateToken } = require('../utils/token');
const {REFRESH_TOKEN_EXPIRE_TIME, ACCESS_TOKEN_EXPIRE_TIME, ACCESS_TOKEN_STRING, REFRESH_TOKEN_STRING, ACCESS_TOKEN_MAX_AGE } = require('../utils/constants');


// register new user
const registerUser = async (req, res) => {
    const user = req.body;
   
    try {
        const emailExists = await User.findOne({ email: req.body.email });
        if (emailExists) return res.status(409).json({msg:"email already exits"});

        if (user.password) {
            user.password = await encryptString(user.password);
        }

        const newUser = new User(user);
        const savedUser = await newUser.save();
        const { password, ...others } = savedUser._doc;
        return res.status(201).json({ msg: 'User registered successfully'});

    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"something went wrong on server"});
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email });
        if (!userExist) return res.status(404).json({ msg: "wrong email" });

        const decryptPassword = await decryptString(userExist.password);

        if (req.body.password !== decryptPassword) return res.status(401).json({ msg: "wrong credentials" });

        // generating token
        const payload = { email: userExist.email };
        const accessToken = generateToken(payload, process.env.JWT_ACCESS_KEY, ACCESS_TOKEN_EXPIRE_TIME);
        const refreshToken = generateToken(payload, process.env.JWT_REFRESH_KEY, REFRESH_TOKEN_EXPIRE_TIME);

        res.cookie(ACCESS_TOKEN_STRING, accessToken, { maxAge: ACCESS_TOKEN_MAX_AGE });
        res.cookie(REFRESH_TOKEN_STRING, refreshToken, { maxAge: 300000 , httpOnly: true, secure: true, sameSite: 'strict'});

        const { password, ...others } = userExist._doc;
        return res.status(200).json({ msg: "authentic user", ...others })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "something went wrong on server" })
    }
}

module.exports = {
    registerUser, loginUser,
}