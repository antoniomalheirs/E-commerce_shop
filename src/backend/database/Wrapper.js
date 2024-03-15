module.exports = class Wrapper {
  constructor(options = {}) {
    if (this.constructor === Wrapper)
      throw new Error("Cannot instantiate absctract class'");

    this.options = options;
  }

  connect() {}
};
