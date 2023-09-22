const { messages, handleMessage } = require("../services/messages.service");
const router = require("express").Router();
router.get("/messages", messages);
router.post("/handleMessage/:id", handleMessage);
module.exports = router;
