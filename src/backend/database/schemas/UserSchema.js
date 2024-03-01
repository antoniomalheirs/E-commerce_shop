const { Schema } = require("mongoose");

module.exports = new Schema({
  username: { type: String }, // O ID do usuário
  password: { type: String}, // Número total de mensagens enviadas
});
