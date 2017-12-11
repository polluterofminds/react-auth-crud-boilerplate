//keys.js
if (process.env.NODE_ENV === "production") {
  //in prod
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
}
