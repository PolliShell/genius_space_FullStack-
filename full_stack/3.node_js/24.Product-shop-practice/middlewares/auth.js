// auth.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { accessTokenSecret } = process.env;

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
};

module.exports = auth;
