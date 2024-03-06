import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Newshop = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [data, setData] = useState("");
  const [administrador, setAdministrador] = useState("");
  const [gerente, setGerente] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    console.log("Dados do formulário:", { nome, numero, cpf, rg, data, administrador, gerente });
    event.preventDefault();
    // Aqui você pode lidar com os dados do formulário, como enviar para o servidor
    
  };

  return (
    <div className="py-2 pl-2 flex justify-start">
      <div className="flex flex-col">
        <h1 className="bg-green-500 text-white px-2 py-1 rounded-xl">
          Crie sua loja aqui
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="Número"
            variant="outlined"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="RG"
            variant="outlined"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="Data"
            type="date"
            variant="outlined"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="Administrador"
            variant="outlined"
            value={administrador}
            onChange={(e) => setAdministrador(e.target.value)}
            className="mb-2"
            required
          />
          <TextField
            label="Gerente"
            variant="outlined"
            value={gerente}
            onChange={(e) => setGerente(e.target.value)}
            className="mb-2"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newshop;
