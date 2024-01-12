const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_EXPIRE_TIME, ACCESS_TOKEN_STRING, ACCESS_TOKEN_MAX_AGE } = require("./constants");
const cookieParser = require("cookie-parser");

// GENERATE TOKEN
const generateToken = (payload, key, expireTime) => {
    console.log("generating token");
    const token = jwt.sign(payload, key, { expiresIn: expireTime });
    return token;
}

// VERIFY USER TOKEN
const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
        const result = await verifyRefresThokenAndGenerateAccessToken(req, res);
        console.log("back to verify token");
        console.log(result);
        if (result === true) {
            next();
        }
    } else {
        console.log("access token found ", accessToken);
        jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, payload) => {
            if (error) return res.status(401).json({ msg: "invalid access token" });
            else {
                req.email = payload.email;
                next();
            }
        });
    }
}

// VERIFY REFRESH TOKEN AND GENERATE NEW ACCESS TOKEN
const verifyRefresThokenAndGenerateAccessToken = (req, res) => {
    return new Promise((resolve) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(404).json("refresh token not found");
        } else {
            console.log("refresh token found ", refreshToken);
            jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (error, payload) => {
                if (error) return res.status(401).json({ msg: "invalid access token" });
                else {
                    const accessToken = generateToken({ email: payload.email }, process.env.JWT_ACCESS_KEY, ACCESS_TOKEN_MAX_AGE);
                    res.cookie(ACCESS_TOKEN_STRING, accessToken, { maxAge: ACCESS_TOKEN_MAX_AGE });
                    console.log("new token generated");
                    resolve(true);
                }
            });
        }
    });
}

module.exports = {
    generateToken,
    verifyAccessToken,
};
