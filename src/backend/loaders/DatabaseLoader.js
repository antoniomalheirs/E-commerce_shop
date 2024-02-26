const { MongoDB } = require("../database");

module.exports = class DatabaseLoader {
  constructor() {
    this.database = false;
  }

  async call() {
    await this.LoaderDatabase();
    console.log("\x1b[1m\x1b[95m[BANCO DE DADOS]\x1b[0m", "Bancos de Dados Operando.");
  }

  async LoaderDatabase(DBWrapper = MongoDB, options = {}) {
    try {
      this.database = new DBWrapper(options);
      await this.database.connect();
    } catch (err) {
      console.error("\x1b[1m\x1b[33m[BANCO DE DADOS]\x1b[0m", `Erro ao conectar o Banco de Dados.\n${err}`);
      process.exit(1); // Sai do processo com código de erro
    }
  }
};
