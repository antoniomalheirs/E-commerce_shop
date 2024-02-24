import Express from "express";
import React from "react";
import ReactDOM from "react-dom/server";

import App from "./src/frontend/App.jsx";

const app = Express();

app.get("/", function (req, res) {
  const teste = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Documsdffsdent</title>
        <style>
          body{
            background-color: #fff;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
          }
          
          span, .primary-color{
            background-image: linear-gradient(to right,#fce729, #f1cd2c);
            -webkit-background-clip: text;
            color: transparent;
          }
        </style> 
    </head>
    <body>
        <div id="app">
            ${ReactDOM.renderToString(<App />)}
    </body>
    </html>  `;
  res.send(teste);
});

app.listen(3030, function () {
  console.log("Servidor na porta 3030");
});
