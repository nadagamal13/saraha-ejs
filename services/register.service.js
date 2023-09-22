const userModel = require("../models/user.model");
module.exports.register = async (req, res) => {
  res.render("register.ejs", { isLoggedIn: false, info: req.flash("info") });
};
module.exports.handleRegister = async (req, res) => {
  await userModel.insertMany(req.body);
  res.redirect("/login");
};
