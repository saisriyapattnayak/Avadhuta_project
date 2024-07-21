let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phNum: Number,
  createpass: String,
});

let userform = mongoose.model("userform", userSchema);//"userform":colln name
module.exports = userform;
