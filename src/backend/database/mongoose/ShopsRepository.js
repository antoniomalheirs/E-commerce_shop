const Repository = require("../Repository.js");

module.exports = class ShopRepository extends Repository {
  constructor(mongoose, model) {
    super();

    if (!mongoose || !model)
      throw new Error("O modelo de loja não pode ser nulo.");
    this.mongoose = mongoose;

    this.model =
      typeof model === "string" ? mongoose.model(model) : model;
  }

  parse(entity) {
    if (entity) {
      return {
        _id: entity._id,
        nome: entity.nome,
        numero: entity.numero,
        cpf: entity.cpf,
        rg: entity.rg,
        data: entity.data,
        administrador: entity.administrador,
        gerente: entity.gerente
      };
    } else {
      return null;
    }
  }

  add(entity) {
    return this.model.create(entity).then(this.parse);
  }

  async findOne(id) {
    return this.model.findById(id).then(this.parse);
  }

  async remove(id) {
    return this.model.findByIdAndDelete(id).then(this.parse);
  }

  async update(id, entity) {
    return this.model
      .findByIdAndUpdate(id, entity, { new: true })
      .then(this.parse);
  }

  async findAll() {
    return this.model.find({}).then((entities) => entities.map(this.parse));
  }
};
