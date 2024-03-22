import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const OferPage = ({ field1Data }) => {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [items, setItems] = useState([]);

  const handleItemsChange = (e) => {
    const itemsString = e.target.value;
    const itemsArray = itemsString
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setItems(itemsArray);
  };

  return (
    <div className="py-4 px-8 bg-white rounded-md">
      <h1 className="bg-red-600 text-white px-4 py-2 rounded-xl text-2xl mb-4">
        Cadastrar Nova Oferta
      </h1>
      <div className="flex flex-col justify-center items-center">
        <form action="/shop/****" method="POST" className="mt-4">
          <div className="mb-4">
            <label htmlFor="titulo" className="text-gray-800">
              Título:
            </label>
            <TextField
              name="titulo"
              placeholder="Título"
              variant="outlined"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="valor" className="text-gray-800">
              Valor:
            </label>
            <TextField
              name="valor"
              placeholder="Valor"
              variant="outlined"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="items" className="text-gray-800">
              Items:
            </label>
            <TextField
              name="items"
              placeholder="Items (separados por vírgula)"
              variant="outlined"
              value={items.join(",")}
              onChange={handleItemsChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="text-gray-800">
              Categoria:
            </label>
            <TextField
              name="categoria"
              placeholder="Categoria"
              variant="outlined"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <input type="hidden" name="administrador" value={field1Data} />
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#FFD700" }}
            className="w-full text-black"
          >
            Cadastrar Oferta
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OferPage;
