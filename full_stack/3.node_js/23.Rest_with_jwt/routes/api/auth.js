const express = require("express");

const ctrl = require("../../controllers/auth");

const {validateBody,upload, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars",authenticate,upload.single("avatar"),ctrl.updateAvatar);

module.exports = router;