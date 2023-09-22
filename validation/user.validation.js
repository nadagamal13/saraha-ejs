const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repassword: Joi.ref("password"),
  email: Joi.string().email().required(),
});
module.exports.userValidation = (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (!error) {
    next();
  } else {
    req.flash("info", error.details);
    res.redirect("/register");
  }
};
