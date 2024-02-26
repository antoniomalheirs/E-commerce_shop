const express = require("express");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");
const { default: Admin } = require("../../frontend/views/Admin.jsx");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/about", (req, res) => {
  res.send("About meu pau no seu bumbum");
});

router.get("/testando", (req, res) => {
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
              font-family: 'Poppins', sans-serif;
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
      ${ReactDOM.renderToString(<Admin/>)}
  </body>
  </html>`;
  res.send(html);
});

module.exports = router;
