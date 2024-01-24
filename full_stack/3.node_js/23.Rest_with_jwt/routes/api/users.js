const express = require("express");

const {users:ctrl} = require("../../controllers/auth");

const {auth,validateBody} = require("../../middlewares");
const {ctrlWrapper} = require("../../helpers");

const router = express.Router();

router.get("/current",auth, ctrlWrapper(ctrl.getCurrent));

module.exports=router;