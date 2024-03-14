const Repository = require("../Repository.js");

module.exports = class OferRepository extends Repository {
  constructor(mongoose, model) {
    super();

    if (!mongoose || !model)
      throw new Error("O modelo de loja não pode ser nulo.");
    this.mongoose = mongoose;

    this.model = typeof model === "string" ? mongoose.model(model) : model;
  }

  parse(entity) {
    if (entity) {
      return {
        _id: entity._id,
        titulo: entity.titulo,
        valor: entity.valor,
        items: entity.items,
        categoria: entity.categoria,
      };
    } else {
      return null;
    }
  }

  async findShopByAdministrador(administrador) {
    try {
      const shop = await this.model.findOne({ administrador });
      console.log(shop);
      return shop ? this.parse(shop) : null;
    } catch (error) {
      console.error("Erro ao buscar loja por administrador:", error);
      throw error;
    }
  }

  async add(entity) {
    const existingOffer = await this.model.findOne({
      titulo: entity.titulo,
      valor: entity.valor,
      items: entity.items,
      categoria: entity.categoria,
    });

    if (existingOffer) {
      throw new Error("Oferta já existe no banco de dados.");
    }

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
