import React from "react";

const Negocio = ({ lojaData }) => {
  return (
    <div className="py-4 bg-red-600 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-gray-500 text-black rounded-md p-3 md:p-4 my-6 md:my-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
            Informações da Loja
          </h1>
          <div className="mb-2">
            <strong>Nome:</strong> {lojaData.nome}
          </div>
          <div className="mb-2">
            <strong>Número:</strong> {lojaData.numero}
          </div>
          <div className="mb-2">
            <strong>CPF:</strong> {lojaData.cpf}
          </div>
          <div className="mb-2">
            <strong>RG:</strong> {lojaData.rg}
          </div>
          <div className="mb-2">
            <strong>Data:</strong> {lojaData.data}
          </div>
          <div className="mb-2">
            <strong>Administrador:</strong> {lojaData.administrador}
          </div>
          <div className="mb-2">
            <strong>Gerente:</strong> {lojaData.gerente}
          </div>
          <div className="mb-2">
            <strong>Dias de Funcionamento:</strong> {lojaData.diasdefuncionamento}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Negocio;
