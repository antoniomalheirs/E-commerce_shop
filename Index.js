import Express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import authRoutes from "./src/backend/routes/auth.js";
import App from "./src/frontend/App.jsx";
import DatabaseLoader from './src/backend/loaders/DatabaseLoader.js';

const server = Express();
require('dotenv').config();

server.use("/auth", authRoutes);

// Configuração da estratégia de autenticação local
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        // Lógica de autenticação aqui
        
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Lógica de desserialização do usuário aqui
    
  } catch (error) {
    done(error);
  }
});

server.use(
  session({
    secret: "oiacordei",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(passport.initialize());
server.use(passport.session());

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
        ${ReactDOM.renderToString(<App />)}
    </body>
    </html>`;
  res.send(html);
});

// Crie uma instância do DatabaseLoader
const databaseLoader = new DatabaseLoader();

// Chame o método `call()` para iniciar o carregamento do banco de dados
databaseLoader.call()
  .then(() => {
    console.log('Banco de dados carregado e conectado com sucesso.');
    // Inicie sua aplicação aqui...
  })
  .catch((err) => {
    console.error('Erro ao carregar o banco de dados:', err);
    // Lide com o erro de forma apropriada...
  });

// Resto do seu código...


server.listen(5173, function () {
  console.log("Servidor na porta 5173");
});

