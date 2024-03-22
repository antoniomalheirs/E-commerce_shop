import React from "react";
import Button from "@mui/material/Button";

const Newnegocio = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 text-white rounded-md p-3 md:p-4 my-6 md:my-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
          Crie sua loja aqui
        </h1>
        <p className="text-gray-300 mb-1 md:mb-3">
          Comece a explorar oportunidades de negócios agora!
        </p>
        <a href="/shop/business">
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFD700" }}
            className="bg-yellow-500 hover:bg-yellow-600"
          >
            Adicionar Loja
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Newnegocio;
