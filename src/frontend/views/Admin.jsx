import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log("Login bem-sucedido");
        // Redirecionar ou fazer outra coisa após o login bem-sucedido
      } else {
        console.error("Falha no login");
      }
    } catch (error) {
      console.error("Erro ao enviar solicitação de login:", error);
    }
  };

  return (
    <div className="py-4">
      <h1 className="text-center text-3xl font-bold text-black ml-4 mb-4">Login de Administrador</h1>
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <TextField
          placeholder="Nome de usuário"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="my-2 w-80 md:w-96"
        />
        <TextField
          type="password"
          placeholder="Senha"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="my-2 w-80 md:w-96"
        />
        <Button type="submit" variant="contained" color="primary" className="my-2 w-80 md:w-96">
          Entrar
        </Button>
      </form>
      <a className="bg-green-100 px-4 py-2 rounded-lg mt-4" href="/auth/about">
        Ir para Dashboard
      </a>
    </div>
  );
};

export default Admin;
