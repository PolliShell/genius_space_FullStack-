const express = require("express");

const ctrl = require("../../controllers/auth");

const {validateBody} = require("../../middlewares");

const {schemas} = require("../../models/user");
const {ctrlWrapper} = require("../../helpers");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));
router.post("/login",validateBody(schemas.loginSchema),ctrlWrapper(ctrl.login));
// router.post

module.exports=router;