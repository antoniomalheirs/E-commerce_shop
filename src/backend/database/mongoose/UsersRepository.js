const Repository = require("../Repository.js");
const bcrypt = require("bcrypt");

module.exports = class UserRepository extends Repository {
  constructor(mongoose, model) {
    super();

    if (!mongoose || !model)
      throw new Error("O modelo de usuário não pode ser nulo.");
    this.mongoose = mongoose;

    this.model = typeof model === "string" ? mongoose.model(model) : model;
  }

  parse(entity) {
    if (entity) {
      return {
        username: entity.username,
        password: entity.password,
      };
    } else {
      return null;
    }
  }

  add(entity) {
    return this.model.create(entity).then(this.parse);
  }

  async add(username, password) {
    try {
      const hash = await bcrypt.hash(password, 10); // Hashing da senha
      password = hash;
      const user = { username, password }; // Armazenar o hash da senha na propriedade 'hash'
      return await this.model.create(user); // Adicionar o usuário ao banco de dados
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      throw error;
    }
  }

  findOne(username, projection) {
    return this.model.findOne({ username }, projection).then(this.parse);
  }

  get size() {
    return this.model.find({}).then((e) => e.length);
  }

  get(username, projection) {
    return this.model
      .findOne({ username }, projection)
      .then((entity) => (entity ? this.parse(entity) : this.add({ username })));
  }

  remove(username) {
    return this.model.findOneAndDelete({ username }).then(this.parse);
  }

  update(username, entity, options = { upsert: true }) {
    return this.model.updateOne({ username }, entity, options);
  }

  async verify(username) {
    return !!(await this.model.findOne({ username }));
  }

  async verifyPassword(username, password) {
    try {
      const user = await this.model.findOne({ username });
      if (!user) {
        return false; // Usuário não encontrado
      }
      const hash = user.password; // Obtém o hash da senha armazenada
      return bcrypt.compare(password, hash, function(err, result) {});// Comparar as senhas
    } catch (error) {
      console.error("Erro ao verificar a senha:", error);
      throw error; // Lançar erro se ocorrer algum problema
    }
  }

  findAll(projection) {
    return this.model.find({}, projection).then((e) => e.map(this.parse));
  }
};
