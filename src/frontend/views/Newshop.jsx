import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Newshop = ({ field1Data }) => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [data, setData] = useState("");
  const [gerente, setGerente] = useState("");

  return (
    <div className="py-2 pl-2 ">
      <h1 className="bg-green-500 text-white px-2 py-1 rounded-xl">
        Crie sua loja aqui
      </h1>
      <div className="flex flex-col justify-center items-center">
        <form action="/shop/**" method="POST" className="mt-4">
          <label htmlFor="nome">Nome:</label>
          <div className="mb-2">
            <TextField
              name="nome"
              placeholder="Nome"
              variant="outlined"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <label htmlFor="numero">Número:</label>
          <div className="mb-2">
            <TextField
              name="numero"
              placeholder="Número"
              variant="outlined"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </div>
          <label htmlFor="cpf">CPF:</label>
          <div className="mb-2">
            <TextField
              name="cpf"
              placeholder="CPF"
              variant="outlined"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <label htmlFor="rg">RG:</label>
          <div className="mb-2">
            <TextField
              name="rg"
              placeholder="RG"
              variant="outlined"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              required
            />
          </div>
          <label htmlFor="data">Data:</label>
          <div className="mb-2">
            <TextField
              name="data"
              type="date"
              placeholder="Data"
              variant="outlined"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <input type="hidden" name="administrador" value={field1Data} />
          <label htmlFor="gerente">Gerente:</label>
          <div className="mb-2">
            <TextField
              name="gerente"
              placeholder="Gerente"
              variant="outlined"
              value={gerente}
              onChange={(e) => setGerente(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="administrador">
              ID do Administrador - {field1Data.toString()}
            </label>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newshop;
