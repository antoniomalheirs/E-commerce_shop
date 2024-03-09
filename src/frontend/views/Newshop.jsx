import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Newshop = ({ field1Data }) => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [data, setData] = useState("");
  const [gerente, setGerente] = useState("");
  const [diasDefuncionamento, setDiasDefuncionamento] = useState([]);

  const handleDiasDefuncionamentoChange = (e) => {
    const diasString = e.target.value;
    const diasArray = diasString
      .split(",")
      .map((day) => day.trim())
      .filter(Boolean);
    setDiasDefuncionamento(diasArray);
  };

  return (
    <div className="py-4 px-8 rounded-md">
      <h1 className="bg-red-500 text-white px-4 py-2 rounded-xl text-2xl mb-4">
        Crie sua loja aqui
      </h1>
      <div className="flex flex-col justify-center items-center">
        <form action="/shop/**" method="POST" className="mt-4">
          <div className="mb-4">
            <label htmlFor="nome" className="text-gray-800">
              Nome:
            </label>
            <TextField
              name="nome"
              placeholder="Nome"
              variant="outlined"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numero" className="text-gray-800">
              Número:
            </label>
            <TextField
              name="numero"
              placeholder="Número"
              variant="outlined"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpf" className="text-gray-800">
              CPF:
            </label>
            <TextField
              name="cpf"
              placeholder="CPF"
              variant="outlined"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rg" className="text-gray-800">
              RG:
            </label>
            <TextField
              name="rg"
              placeholder="RG"
              variant="outlined"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="text-gray-800">
              Data:
            </label>
            <TextField
              name="data"
              type="date"
              placeholder="Data"
              variant="outlined"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <input type="hidden" name="administrador" value={field1Data} />
          <div className="mb-4">
            <label htmlFor="gerente" className="text-gray-800">
              Gerente:
            </label>
            <TextField
              name="gerente"
              placeholder="Gerente"
              variant="outlined"
              value={gerente}
              onChange={(e) => setGerente(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="diasdefuncionamento" className="text-gray-800">
              Dias de Funcionamento:
            </label>
            <TextField
              name="diasdefuncionamento"
              placeholder="Dias de Funcionamento (separados por vírgula)"
              variant="outlined"
              value={diasDefuncionamento.join(",")}
              onChange={handleDiasDefuncionamentoChange}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#FFD700" }}
            className="w-full"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newshop;
