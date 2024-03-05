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
    if (user) {
      console.log("Deserializing...");
      console.log(username);
      done(null, user);
    }
  } catch (error) {
    done(error, false);
  }
});

passport.use(new Strategy({ usernameField: "username" }, async (username, password, done) => {
      try {
        const userschema = new UsersRepository(Mongoose, "Users");
        const user = await userschema.findOne(username);

        if (!user) {
          console.log("Usuário não encontrado");
          return done(null, false);
        }

        const isPasswordCorrect = await userschema.verifyPassword(
          username,
          password
        );

        if (isPasswordCorrect) {
          console.log("Senha correta");
          return done(null, user);
        } else {
          console.log("Senha incorreta");
          return done(null, false);
        }
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        return done(error, false);
      }
    }
  )
);

passport.use("signup", new Strategy({ usernameField: "username" }, async (username, password, done) => {
      try {
        const userschema = new UsersRepository(Mongoose, "Users");
        const user = await userschema.findOne(username);

        if (user) {
          console.log("Usuário existente");
          return done(null, false);
        } else {
          try {
            const newUser = await userschema.add(username, password);
            console.log("Conta criada");
            return done(null, newUser);
          } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return done(error, false);
          }
        }
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        return done(error, false);
      }
    }
  )
);
