const express = require("express");
const passport = require("passport");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const { default: Admin } = require("../../frontend/views/Admin.jsx");
const { default: HomeAdm } = require("../../frontend/views/HomeAdm.jsx");
const { default: Register } = require("../../frontend/views/Register.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
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

router.post("/login", passport.authenticate("local", { failureRedirect: "/auth/admin" }), async (req, res, next) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
        <style>
          body {
            background-color: #ccc;
            font-family: 'Arial', sans-serif;
            font-weight: 1000;
          }
          span, .primary-color {
            background-image: linear-gradient(to right,#fce729, #f1cd2c);
            -webkit-background-clip: text;
            color: transparent;
          }
        </style>
      </head>
      <body>
        ${ReactDOM.renderToString(<HomeAdm field1Data={req.user.username} field2Data={"Nome de administrador"} field3Data={req.user._id} field4Data={"Id de administrador"}/>)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
  res.send(html);
});

router.post("/signup", passport.authenticate("signup", { failureRedirect: "/auth/register" }), async (req, res, next) => {
    const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <title>Hot Dog Adams</title>
          <style>
              body{
                  background-color: #ccc;
                  font-family: 'Arial', sans-serif;
                  font-weight: 1000;
              }
              
              span, .primary-color{
                  background-image: linear-gradient(to right,#fce729, #f1cd2c);
                  -webkit-background-clip: text;
                  color: transparent;
              }
              </style>
      </head>
      <body>
        ${ReactDOM.renderToString(<HomeAdm field1Data={req.user.username} field2Data={"Nome de administrador"} field3Data={req.user._id} field4Data={"Id de administrador"}/>)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
      </html>`;
    res.send(html);
  }
);

router.get("/register", (req, res) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <title>Hot Dog Adams</title>
      <style>
          body{
              background-color: #ccc;
              font-family: 'Arial', sans-serif;
              font-weight: 1000;
          }
          
          span, .primary-color{
              background-image: linear-gradient(to right,#fce729, #f1cd2c);
              -webkit-background-clip: text;
              color: transparent;
          }
          </style>
  </head>
  <body>
      ${ReactDOM.renderToString(<Register />)}
  </body>
  </html>`;
  res.send(html);
});

router.get("/admin", (req, res) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <title>Hot Dog Adams</title>
      <style>
          body{
              background-color: #ccc;
              font-family: 'Arial', sans-serif;
              font-weight: 1000;
          }
          
          span, .primary-color{
              background-image: linear-gradient(to right,#fce729, #f1cd2c);
              -webkit-background-clip: text;
              color: transparent;
          }
          </style>
  </head>
  <body>
      ${ReactDOM.renderToString(<Admin />)}
  </body>
  </html>`;
  res.send(html);
});

module.exports = router;
