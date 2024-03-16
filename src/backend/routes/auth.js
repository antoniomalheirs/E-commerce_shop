const express = require("express");
const passport = require("passport");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const Mongoose = require("mongoose");
const ShopRepository = require("../database/mongoose/ShopsRepository");
const OfersRepository = require("../database/mongoose/OfersRepository");

const { default: Admin } = require("../../frontend/views/Admin.jsx");
const { default: HomeAdm } = require("../../frontend/views/HomeAdm.jsx");
const { default: Register } = require("../../frontend/views/Register.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");
const { default: Newnegocio } = require("../../frontend/views/Newnegocio.jsx");
const { default: Negocio } = require("../../frontend/views/Negocio.jsx");
const { default: Ofers } = require("../../frontend/views/Ofers.jsx");
const { default: Oferta } = require("../../frontend/views/Oferta.jsx");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

function renderHTMLWithErrorMessage(errorMessage, AdminComponent) {
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
        ${ReactDOM.renderToString(<AdminComponent />)}
      </body>
    </html>`;

  return html;
}

function generateHTML(req, shop, ofer) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
      </head>
      <body>
        ${ReactDOM.renderToString(
          <HomeAdm
            field1Data={req.user.username}
            field2Data={"Nome de administrador"}
            field3Data={req.user._id}
            field4Data={"Id de administrador"}
          />
        )}
        ${shop ? ReactDOM.renderToString(<Negocio lojaData={shop} />) : ""}
        ${shop ? "" : ReactDOM.renderToString(<Newnegocio />)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          ${ofer.map((ofer, index) => ReactDOM.renderToString(<Oferta key={index} ofertaData={ofer} />)).join("")}
        </div>
        ${ofer ? "" : ReactDOM.renderToString(<Ofers />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
}

async function render(administrador) {
  try {
    const shopRepository = new ShopRepository(Mongoose, "Shops");
    const shop = await shopRepository.findShopByAdministrador(administrador);
    return shop;
  } catch (error) {
    console.error("Erro ao renderizar loja por administrador:", error);
    throw error;
  }
}

async function renderOfer(administrador) {
  try {
    const oferRepository = new OfersRepository(Mongoose, "Ofers");
    const ofer = await oferRepository.findOfertasByAdministrador(administrador);
    return ofer;
  } catch (error) {
    console.error("Erro ao renderizar loja por administrador:", error);
    throw error;
  }
}

router.use((req, res, next) => {
  console.log("Auth Time: ", Date.now());
  next();
});

router.get("/about", isAuthenticated, (req, res) => {
  res.send("About meu pau no seu bumbum");
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash(
        "error",
        "Erro de autenticação. Verifique suas credenciais e tente novamente."
      );
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(errorMessage, Admin);
      return res.send(html);
    }
    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }
      try {
        const shop = await render(req.user._id);
        const ofer = await renderOfer(req.user._id);
        const html = generateHTML(req, shop, ofer);
        res.send(html);
      } catch (error) {
        console.error("Erro ao renderizar loja:", error);
        req.flash("error", "Erro ao carregar informações da loja.");
        const errorMessage = req.flash("error")[0];
        const html = renderHTMLWithErrorMessage(errorMessage, Admin);
        return res.send(html);
      }
    });
  })(req, res, next);
});

router.post("/signup", async (req, res, next) => {
  passport.authenticate("signup", async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error", "Erro ao criar usuário. Por favor, tente novamente.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(errorMessage, Register);
      return res.send(html);
    }
    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }
      const shop = await render(req.user._id);
      const html = generateHTML(req, shop);
      res.send(html);
    });
  })(req, res, next);
});

router.get("/register", async (req, res) => {
  if (req.isAuthenticated()) {
    const shop = await render(req.user._id);
    const html = generateHTML(req, shop);
    res.send(html);
  } else {
    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <title>Hot Dog Adams</title>
  </head>
  <body>
      ${ReactDOM.renderToString(<Register />)}
  </body>
  </html>`;
    res.send(html);
  }
});

router.get("/admin", async (req, res) => {
  if (req.isAuthenticated()) {
    const shop = await render(req.user._id);
    const html = generateHTML(req, shop);
    res.send(html);
  } else {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
    </head>
    <body>
        ${ReactDOM.renderToString(<Admin />)}
    </body>
    </html>`;
    res.send(html);
  }
});

module.exports = router;
