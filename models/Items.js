const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema({
  title: String,
  another: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  dateAdded: Date,
  dateUpdated: Date
});

mongoose.model("items", itemsSchema);
module.exports = itemsSchema;
