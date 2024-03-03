const passport = require("passport");
const { Strategy } = require("passport-local");
const Mongoose = require("mongoose");
const UsersRepository = require("../database/mongoose/UsersRepository");

passport.serializeUser((user, done) => {
  console.log("Serializing...");
  console.log(user);
  done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  const userschema = new UsersRepository(Mongoose, "Users");
  const user = await userschema.findOne(username);
  
  try {
    if(user)
    {
      console.log("Deserializing...");
      console.log(username);
      done(null, user); 
    };
  } catch (error) {
    done(error,false);
  }
});

passport.use(new Strategy({ usernameField: "username" }, async (username, password, done) => {
    try {
        const userschema = new UsersRepository(Mongoose, "Users");
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
        return done(error,false);
    }
}));

