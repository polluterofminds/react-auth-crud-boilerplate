const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  displayName: String,
  email: String
});

mongoose.model("users", userSchema);
