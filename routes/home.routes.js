const { Home } = require("../services/home.service");
const router = require("express").Router();
router.get("/", Home);
module.exports = router;
