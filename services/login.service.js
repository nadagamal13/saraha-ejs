const userModel = require("../models/user.model");
module.exports.login = async (req, res) => {
  res.render("login.ejs", { isLoggedIn: false });
};
module.exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    if (user.password == password) {
      let hour = 3600000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      req.session.cookie.maxAge = hour;
      req.session.userId = user._id;
      req.session.email = user.email;
      req.session.name = user.name;
      req.session.isLoggedIn = true;
      res.redirect("/messages");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};
