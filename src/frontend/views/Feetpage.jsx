import React from "react";

const HomeAdm = () => {
  return (
    <div className="py-4 flex justify-center items-center">
      <div className="flex flex-row">
        <a href="/auth/about" className="block text-center text-green-500 mr-4 underline">Ir para sobre!</a>
        <a href="/auth/logout" className="block text-center text-green-500 underline">Sair e Voltar para o Inicio</a>
      </div>
    </div>
  );
};

export default HomeAdm;