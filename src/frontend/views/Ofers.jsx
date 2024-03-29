import React from "react";
import Button from "@mui/material/Button";

const Ofers = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-gray-500 text-black rounded-md p-3 md:p-4 my-6 md:my-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
          Crie sua Oferta
        </h1>
        <p className="text-gray-800 mb-1 md:mb-3">
          Comece a criar suas ofertas!
        </p>
        <a href="/shop/oferta">
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFD700" }}
            className="hover:bg-yellow-600"
          >
            Adicionar Oferta
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Ofers;
