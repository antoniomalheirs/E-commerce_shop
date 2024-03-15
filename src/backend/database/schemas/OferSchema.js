const { Schema } = require("mongoose");

module.exports = new Schema({
  titulo: { type: String, required: true },
  valor: { type: String, required: true },
  categoria: { type: String, required: true },
  items: [{ type: String }],
});
