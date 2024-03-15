import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loginFailed = params.get("admin");

    if (loginFailed) {
      alert("Credenciais inválidas. Por favor, tente novamente.");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="py-4 bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Login
        </h1>
        <form
          action="/auth/login"
          method="POST"
          className="flex flex-col items-center"
        >
          <TextField
            placeholder="Nome de usuário"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2 w-full"
            required
            name="username"
          />
          <TextField
            type="password"
            placeholder="Senha"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 w-full"
            required
            name="password"
          />
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#FF0000" }} // Alterado para a cor padrão do site
            className="my-2 w-full"
          >
            Entrar
          </Button>
        </form>

        <a
          href="/auth/register"
          className="block text-center text-red-500 mt-4 underline"
        >
          Registrar conta
        </a>
      </div>
    </div>
  );
};

export default Admin;
