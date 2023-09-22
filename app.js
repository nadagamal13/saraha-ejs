const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const store = new MongoDBStore({
  uri: "mongodb://localhost:27017/saraha-ejs",
  collection: "mySessions",
});
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(require("./routes/home.routes"));
app.use(require("./routes/login.routes"));
app.use(require("./routes/messages.routes"));
app.use(require("./routes/register.routes"));
app.use(require("./routes/user.routes"));
app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});
app.get("/", (req, res) => res.send("Hello World!"));
mongoose.connect("mongodb://localhost:27017/saraha-ejs");
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
