const OfersRepository = require("../OfersRepository");
const ShopSchema = require("../../schemas/ShopSchema.js");

module.exports = class ShopRepository extends OfersRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model("Ofers", ShopSchema));
  }

  parse(entity) {
    return {
      _id: null,
      titulo: null,
      valor: null,
      items: null,
      categoria: null,
      ...(super.parse(entity) || {}),
    };
  }
};
