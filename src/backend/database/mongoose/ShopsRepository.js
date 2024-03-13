const Repository = require("../Repository.js");

module.exports = class ShopRepository extends Repository {
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
        nome: entity.nome,
        numero: entity.numero,
        cpf: entity.cpf,
        rg: entity.rg,
        data: entity.data.toLocaleDateString(), // ou entity.data.toISOString()
        administrador: entity.administrador,
        gerente: entity.gerente,
        diasdefuncionamento: entity.diasdefuncionamento,
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
    const existingShop = await this.model.findOne({
      nome: entity.nome,
      numero: entity.numero,
      cpf: entity.cpf,
      rg: entity.rg,
      data: entity.data,
      administrador: entity.administrador,
      gerente: entity.gerente,
    });

    if (existingShop) {
      throw new Error("Loja já existe no banco de dados.");
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
