const { Schema } = require("mongoose");

module.exports = new Schema({
  username: { type: String },
  password: { type: String},
  hash: { type: String}
});
