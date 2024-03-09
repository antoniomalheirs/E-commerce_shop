// server.js
import express from "express";
import React from "react";
import passport from "passport";
import ReactDOMServer from "react-dom/server";
import session from "express-session";
import authRoutes from "./src/backend/routes/auth.js";
import shopRoutes from "./src/backend/routes/shop.js";
import App from "./src/frontend/App.jsx";
import DatabaseLoader from "./src/backend/loaders/DatabaseLoader.js";
import "./src/backend/routes/local.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";

require("dotenv").config();
const databaseLoader = new DatabaseLoader();

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.set("trust proxy", 1);
const caminhoCompleto = path.resolve(__dirname, "public", "img");

const caminhoSemDist = caminhoCompleto.replace(
  path.sep + "dist" + path.sep,
  path.sep
);

console.log("Caminho da imagem:", caminhoSemDist);
server.use("/images", express.static(path.resolve(caminhoSemDist)));

server.use(cookieParser());
server.use(
  session({
    secret: process.env.SECRET_KEY,
    name: "E-Commerce_Shop",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 999000 },
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/auth", authRoutes);
server.use("/shop", shopRoutes);

server.get("/", function (req, res) {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
       
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
