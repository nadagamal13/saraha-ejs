const userModel = require("../models/user.model");
module.exports.user = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.render("user.ejs", {
    isLoggedIn: false,
    userId: req.params.id,
    userName: user.name,
  });
};
