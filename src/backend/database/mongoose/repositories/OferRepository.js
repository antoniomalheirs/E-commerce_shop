const OfersRepository = require("../OfersRepository");
const OferSchema = require("../../schemas/OferSchema.js");

module.exports = class OferRepository extends OfersRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model("Ofers", OferSchema));
  }

  parse(entity) {
    return {
      _id: null,
      titulo: null,
      valor: null,
      administrador: null,
      items: null,
      categoria: null,
      ...(super.parse(entity) || {}),
    };
  }
};
