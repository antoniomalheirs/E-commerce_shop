import React from "react";

const HomeAdm = () => {
  return (
    <div className="fixed bottom-0 w-full bg-red-600 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/auth/about"
          className="text-yellow-300 text-lg hover:underline mr-8"
        >
          Sobre
        </a>
        <a
          href="/auth/logout"
          className="text-yellow-300 text-lg hover:underline"
        >
          Sair e Voltar para o Início
        </a>
      </div>
    </div>
  );
};

export default HomeAdm;
