const Wrapper = require("../Wrapper");

const mongoose = require("mongoose");
const {
  UserRepository,
  ShopRepository,
  OferRepository
} = require("./repositories");

module.exports = class MongoDB extends Wrapper {
  constructor(options = {}) {
    super(options);
    this.mongoose = mongoose;
  }

  async connect() {
    

    return mongoose.connect(process.env.DATABASE_CONNECT).then((m) => {
      this.users = new UserRepository(m);
      this.shops = new ShopRepository(m);
      this.ofers = new OferRepository(m);
    });
  }
};
