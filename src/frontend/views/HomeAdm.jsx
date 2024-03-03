import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HomeAdm = () => {

  return (
    <div className="py-4">
      <a href="/auth/about" className="block text-center text-green-500 mt-4 underline">Ir para sobre!</a>
      <a href="/auth/logout" className="block text-center text-green-500 mt-4 underline">Sair e Voltar para o Inicio</a>
    </div>
    );
};

export default HomeAdm;
