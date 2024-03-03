const express = require("express");
const passport = require("passport");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");
const { default: Admin } = require("../../frontend/views/Admin.jsx");
const { default: HomeAdm } = require("../../frontend/views/HomeAdm.jsx");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  //if (req.user) next();
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

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("Tudo certo, estamos indo bem Sr." + req.user.username); 
  
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
      ${ReactDOM.renderToString(<HomeAdm/>)}
  </body>
  </html>`;
  res.send(html);
  //console.log(req.user);

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
