import React from "react";
import Button from "@mui/material/Button";

const Newnegocio = () => {
  return (
    <div className="py-2 pl-2 flex justify-start" >
      <div className="flex flex-col">
        <h1 className="bg-green-500 text-white px-2 py-1 rounded-xl">
            Crie sua loja aqui
        </h1>
        <a href="/shop/newB" className="pt-2 pl-3">
          <Button variant="contained" color="primary">
            Adicionar
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Newnegocio;
