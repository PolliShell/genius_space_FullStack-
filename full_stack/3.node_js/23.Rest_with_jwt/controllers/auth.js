const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const {User} = require("../models/user");
const path= require("path");
const fs = require("fs").promises;
const {HttpError, ctrlWrapper} = require("../helpers");

const {SECRET_KEY} = process.env;

const register = async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});

    if (user) {
        throw HttpError(409, "Email already in use");
    }
    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({name, email, password: hashPassword, avatarURL});

    res.status(201).json({
        name,
        email, avatarURL
        // email: newUser.email,
        // name: newUser.name,
        // avatarURL: newUser.avatarURL
    })
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        throw HttpError(401, "Email or password invalid");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(401, "Email or password invalid");
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token});

    res.json({
        token,
    })
}

const getCurrent = async (req, res) => {
    const {email, name} = req.user;

    res.json({
        email,
        name,
    })
}

const logout = async (req, res) => {
    const {_id} = req.user;
    await User.findByIdAndUpdate(_id, {token: ""});

    res.json({
        message: "Logout success"
    })
}
const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const {path: tempUpload, originalname} = req.file;
    try {
        const resultUpload = path.join(avatarDir, originalname);

        // Check if avatarDir exists, create it if not
        await fs.mkdir(avatarDir, { recursive: true });

        await fs.rename(tempUpload, resultUpload);

        const avatarURL = path.join("public", "avatars", originalname);
        await User.findByIdAndUpdate(req.user._id, {avatarURL});
        res.json({avatarURL});
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar:ctrlWrapper(updateAvatar)
}