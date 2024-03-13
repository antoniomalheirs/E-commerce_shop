const express = require("express");
const passport = require("passport");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const { default: Admin } = require("../../frontend/views/Admin.jsx");
const { default: HomeAdm } = require("../../frontend/views/HomeAdm.jsx");
const { default: Register } = require("../../frontend/views/Register.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");
const { default: Newnegocio } = require("../../frontend/views/Newnegocio.jsx");

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

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
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
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
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
        ${ReactDOM.renderToString(
          <HomeAdm
            field1Data={req.user.username}
            field2Data={"Nome de administrador"}
            field3Data={req.user._id}
            field4Data={"Id de administrador"}
          />
        )}
        ${ReactDOM.renderToString(<Newnegocio />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
      res.send(html);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  passport.authenticate("signup", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error", "Erro ao criar usuário. Por favor, tente novamente.");
      const errorMessage = req.flash("error")[0];
      const html = renderHTMLWithErrorMessage(errorMessage, Register);
      return res.send(html);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const html = `<!DOCTYPE html>
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
        ${ReactDOM.renderToString(<Newnegocio />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
      </html>`;
      res.send(html);
    });
  })(req, res, next);
});

router.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
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
        ${ReactDOM.renderToString(
          <HomeAdm
            field1Data={req.user.username}
            field2Data={"Nome de administrador"}
            field3Data={req.user._id}
            field4Data={"Id de administrador"}
          />
        )}
        ${ReactDOM.renderToString(<Newnegocio />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
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

router.get("/admin", (req, res) => {
  if (req.isAuthenticated()) {
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
        ${ReactDOM.renderToString(
          <HomeAdm
            field1Data={req.user.username}
            field2Data={"Nome de administrador"}
            field3Data={req.user._id}
            field4Data={"Id de administrador"}
          />
        )}
        ${ReactDOM.renderToString(<Newnegocio />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
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
