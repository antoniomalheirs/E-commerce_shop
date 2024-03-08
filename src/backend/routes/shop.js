const express = require("express");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const { default: Newshop } = require("../../frontend/views/Newshop.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");

const Mongoose = require("mongoose");
const ShopsRepository = require("../database/mongoose/ShopsRepository");

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
};
  
router.use((req, res, next) => {
    console.log("Shop Time: ", Date.now());
    next();
});

router.get("/newB", isAuthenticated, (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
      </head>
      <body>
        ${ReactDOM.renderToString(<Newshop  field1Data={req.user._id}/>)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
  res.send(html);
});

router.post("/**", isAuthenticated, async (req, res) => {
  const shopschema = new ShopsRepository(Mongoose, "Shops");
  const shop = req.body;

  if (typeof shop.diasdefuncionamento === 'string') {
    shop.diasdefuncionamento = shop.diasdefuncionamento.split(',').map(day => day.trim()).filter(Boolean);
  }
  
  try {
      await shopschema.add(shop);
      console.log("Dados da requisição:", req.body);

      const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <title>Hot Dog Adams</title>
        </head>
        <body>
          ${ReactDOM.renderToString(<Newshop />)}
          ${ReactDOM.renderToString(<Feetpage />)}
        </body>
      </html>`;
      res.send(html);
  } catch (error) {
      if (error.message === "Loja já existe no banco de dados.") {
          res.status(400).send("Loja já existe no banco de dados.");
      } else {
          console.error("Erro ao adicionar loja:", error);
          res.status(500).send("Erro interno do servidor.");
      }
  }
});


module.exports = router;