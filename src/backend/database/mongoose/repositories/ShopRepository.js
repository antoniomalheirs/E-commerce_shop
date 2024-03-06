const UsersRepository = require("../UsersRepository");
const ShopSchema = require("../../schemas/ShopSchema.js");

module.exports = class ShopRepository extends UsersRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model("Shops", ShopSchema));
  }

  parse(entity) {
    return {
      _id: null,
      nome: null,
      numero: null,
      cpf: null,
      rg: null,
      data: null,
      administrador: null,
      gerente: null,
      ...(super.parse(entity) || {}),
    };
  }
};
