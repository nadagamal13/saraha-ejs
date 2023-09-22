module.exports.Home = async (req, res) => {
  res.render("index.ejs", { isLoggedIn: false });
};
