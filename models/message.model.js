const mongoose = require("mongoose");
const schema = mongoose.Schema({
  message: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("message", schema);
