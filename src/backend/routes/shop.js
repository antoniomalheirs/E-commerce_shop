const express = require("express");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const { default: Newshop } = require("../../frontend/views/Newshop.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");
const { default: OferPage } = require("../../frontend/views/OferPage.jsx");

const Mongoose = require("mongoose");
const ShopsRepository = require("../database/mongoose/ShopsRepository");
const OfersRepository = require("../database/mongoose/OfersRepository");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

function renderHTMLWithErrorMessage(
  errorMessage,
  reqUserData,
  NewshopComponent,
  FeetpageComponent
) {
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
      </head>
      <body>
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Erro:</strong>
          <span class="block sm:inline">${errorMessage}</span>
        </div>
        ${ReactDOM.renderToString(
          <NewshopComponent field1Data={reqUserData} />
        )}
        ${ReactDOM.renderToString(<FeetpageComponent />)}
      </body>
    </html>`;

  return html;
}

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
        ${ReactDOM.renderToString(<Newshop field1Data={req.user._id} />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
  res.send(html);
});

router.get("/newO", isAuthenticated, (req, res) => {
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
        ${ReactDOM.renderToString(<OferPage userId={req.user._id} />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
  res.send(html);
});

router.post("/**", isAuthenticated, async (req, res, next) => {
  const shopschema = new ShopsRepository(Mongoose, "Shops");
  const shop = req.body;

  if (typeof shop.diasdefuncionamento === "string") {
    shop.diasdefuncionamento = shop.diasdefuncionamento
      .split(",")
      .map((day) => day.trim())
      .filter(Boolean);
  }

  shop.diasdefuncionamento = shop.diasdefuncionamento.map(
    (day) => day + " - Feira"
  );
  const diasDaSemana = [
    "Segunda - Feira",
    "Terça - Feira",
    "Quarta - Feira",
    "Quinta - Feira",
    "Sexta - Feira",
    "Sábado - Feira",
    "Domingo - Feira",
  ];
  const diasCorretos = shop.diasdefuncionamento.every((day) =>
    diasDaSemana.includes(day)
  );
  if (!diasCorretos) {
    req.flash(
      "error",
      "Os dias de funcionamento devem corresponder aos dias da semana."
    );
    const errorMessage = req.flash("error")[0];
    const html = renderHTMLWithErrorMessage(
      errorMessage,
      req.user._id,
      Newshop,
      Feetpage
    );
    return res.send(html);
  }

  try {
    await shopschema.add(shop);
    console.log("Dados da requisição:", req.body);
    return res.redirect("/auth/admin");
  } catch (error) {
    if (error.message === "Loja já existe no banco de dados.") {
      req.flash("error", "Loja já existe no banco de dados.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(
        errorMessage,
        req.user._id,
        Newshop,
        Feetpage
      );
      return res.send(html);
    } else {
      console.error("Erro ao adicionar loja:", error);
      req.flash("error", "Erro interno do servidor.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(
        errorMessage,
        req.user._id,
        Newshop,
        Feetpage
      );
      return res.send(html);
    }
  }
});

router.post("/bend", isAuthenticated, async (req, res, next) => {
  const oferschema = new OfersRepository(Mongoose, "Ofers");
  const oferta = req.body;

  try {
    await oferschema.add(oferta);
    console.log("Dados da requisição:", req.body);
    
  } catch (error) {
    if (error.message === "Loja já existe no banco de dados.") {
      req.flash("error", "Loja já existe no banco de dados.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(
        errorMessage,
        req.user._id,
        OferPage,
        Feetpage
      );
      return res.send(html);
    } else {
      console.error("Erro ao adicionar loja:", error);
      req.flash("error", "Erro interno do servidor.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(
        errorMessage,
        req.user._id,
        OferPage,
        Feetpage
      );
      return res.send(html);
    }
  }
});

module.exports = router;
