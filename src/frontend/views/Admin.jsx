import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="py-4" style={{  }}>
      <h1 className="text-center text-3xl font-bold text-black mb-4">
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
          className="my-2 w-80 md:w-96"
          required
          name="username"
        />
        <TextField
          type="password"
          placeholder="Senha"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="my-2 w-80 md:w-96"
          required
          name="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="my-2 w-80 md:w-96"
        >
          Entrar
        </Button>
      </form>

      <a href="/auth/register" className="block text-center text-green-500 mt-4 underline">Registrar conta</a>
    </div>
  );
};
export default Admin;
