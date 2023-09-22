const { user } = require("../services/user.service");
const router = require("express").Router();
router.get("/user/:id", user);
module.exports = router;
