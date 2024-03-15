import React from "react";

const Oferta = ({ ofertaData }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-500 text-black rounded-md p-3 md:p-4 my-6 md:my-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
          Informações da Oferta
        </h1>
        <div className="mb-2">
          <strong>Título:</strong> {ofertaData.titulo}
        </div>
        <div className="mb-2">
          <strong>Valor:</strong> {ofertaData.valor}
        </div>
        <div className="mb-2">
          <strong>Administrador:</strong> {ofertaData.administrador}
        </div>
        <div className="mb-2">
          <strong>Categoria:</strong> {ofertaData.categoria}
        </div>
        <div className="mb-2">
          <strong>Itens:</strong>{" "}
          {ofertaData.items.map((item, index) => (
            <span key={index}>{item}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Oferta;
