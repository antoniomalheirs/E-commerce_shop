const UsersRepository = require("../UsersRepository");
const UserSchema = require("../../schemas/UserSchema.js");

module.exports = class UserRepository extends UsersRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model("Users", UserSchema));
  }

  parse(entity) {
    return {
      username: null,
      password: null,
      hash: null,
      ...(super.parse(entity) || {}),
    };
  }
};
