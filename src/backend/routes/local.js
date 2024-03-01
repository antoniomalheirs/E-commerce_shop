const passport = require("passport");
const { Strategy } = require("passport-local");
const Mongoose = require("mongoose");
const UsersRepository = require("../database/mongoose/UsersRepository");
const bcrypt = require('bcrypt');

passport.use(new Strategy({ usernameField: "username" }, async (username, password, done) => {
    try {
        const userschema = new UsersRepository(Mongoose, "Users");

        passport.serializeUser((user, done) => {
            done(null, user.username);
          });
          
          passport.deserializeUser(async (username, done) => {
            try {
              const user = await userschema.findOne(username); // Use seu método de encontrar usuário com base no ID
              done(null, user); // Retorna o usuário encontrado
            } catch (error) {
              done(error); // Se ocorrer um erro, repasse-o ao Passport
            }
          });
        // Verificar se o usuário existe
        const user = await userschema.findOne(username);

        if (!user) {
            console.log("Usuário não encontrado");
            userschema.add(username, password);
            return done(null, false);
        }

        // Comparar a senha fornecida com a senha armazenada no banco de dados
        const isPasswordCorrect = await userschema.verifyPassword(username, password);

        if (isPasswordCorrect) {
            console.log("Senha correta");
            return done(null, user);
        } else {
            console.log("Senha incorreta");
            return done(null, false);
        }
    } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        return done(error);
    }
}));

