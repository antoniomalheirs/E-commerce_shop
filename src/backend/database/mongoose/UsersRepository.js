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
        _id: entity._id,
        username: entity.username,
        password: entity.password,
        hash: entity.hash,
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
      const hash = await bcrypt.hash(password, 10); 
      const user = { username, hash }; 
      return await this.model.create(user); 
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
      user.password= password;
      if (!user) {
        return false; 
      }
      const hash = user.hash; 
      const result = await bcrypt.compare(password, hash); 
      return result; 
    } catch (error) {
      console.error("Erro ao verificar a senha:", error);
      throw error; 
    }
  }

  findAll(projection) {
    return this.model.find({}, projection).then((e) => e.map(this.parse));
  }
};
