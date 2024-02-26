const Wrapper = require("../Wrapper");

const mongoose = require("mongoose");
const {
  UserRepository,
} = require("./repositories");

module.exports = class MongoDB extends Wrapper {
  constructor(options = {}) {
    super(options);
    this.mongoose = mongoose;
  }

  async connect() {
    const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

    return mongoose.connect(process.env.DATABASE_CONNECT, OPTIONS).then((m) => {
      this.users = new UserRepository(m);
    });
  }
};
