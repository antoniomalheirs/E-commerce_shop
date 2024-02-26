import React from "react";

const Admin = () => {
  return (
    <div className="py-4">
      <h1 className="text-center text-3xl font-bold black ml-4">
        Login de Administrador
      </h1>
      <h1> ola mundo </h1>
      {/* Link para a rota '/auth/about' */}
      <a className="bg-green-100" href="/auth/about">Ir para About</a>
    </div>
  );
};

export default Admin;
