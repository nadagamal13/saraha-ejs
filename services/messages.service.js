const messageModel = require("../models/message.model");
module.exports.messages = async (req, res) => {
  const messages = await messageModel.find({ userId: req.session.userId });
  let fullUrl = req.protocol + "://" + req.get("host");
  if (req.session.isLoggedIn) {
    res.render("messages.ejs", {
      name: req.session.name,
      isLoggedIn: req.session.isLoggedIn,
      userId: req.session.userId,
      messages,
      fullUrl,
    });
  } else {
    res.redirect("/login");
  }
};
module.exports.handleMessage = async (req, res) => {
  await messageModel.insertMany({
    message: req.body.message,
    userId: req.session.userId,
  });
  res.redirect("/user/" + req.params.id);
};
