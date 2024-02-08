// auth.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { accessTokenSecret } = process.env;

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const {id} = jwt.verify(token, accessTokenSecret);
    const user = await User.findById(id);

    jwt.verify(token, accessTokenSecret, (err) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
};

module.exports = auth;
