const { register, handleRegister } = require("../services/register.service");
const { userValidation } = require("../validation/user.validation");
const router = require("express").Router();
router.get("/register", register);
router.post("/handleRegister", userValidation, handleRegister);
module.exports = router;
