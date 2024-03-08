const { Schema } = require("mongoose");

module.exports = new Schema({
  nome: { type: String, required: true },
  numero: { type: String, required: true },
  cpf: { type: String, required: true },
  rg: { type: String, required: true },
  data: { type: Date, required: true },
  administrador: { type: String, required: true },
  gerente: { type: String },
  diasdefuncionamento: [{ type: String }]
});
