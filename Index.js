// server.js
import express from "express";
import React from "react";
import passport from "passport";
import ReactDOMServer from "react-dom/server";
import session from "express-session";
import authRoutes from "./src/backend/routes/auth.js";
import App from "./src/frontend/App.jsx";
import DatabaseLoader from "./src/backend/loaders/DatabaseLoader.js";
import "./src/backend/routes/local.js"; 

require("dotenv").config();
const databaseLoader = new DatabaseLoader();

const server = express();

server.use(express.json());
server.use(express.urlencoded());

server.set("trust proxy", 1);

server.use(
  session({
    secret: process.env.SECRET_KEY,
    name: "E-Commerce_Shop",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 360000 },
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/auth", authRoutes);

server.get("/", function (req, res) {
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
        ${ReactDOMServer.renderToString(<App />)}
    </body>
    </html>`;
  res.send(html);
});

databaseLoader
  .call()
  .then(() => {
    console.log("Banco de dados carregado e conectado com sucesso.");
    server.listen(5173, function () {
      console.log("Servidor na porta 5173");
    });
  })
  .catch((err) => {
    console.error("Erro ao carregar o banco de dados:", err);
  });
