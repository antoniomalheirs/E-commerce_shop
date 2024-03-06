import React from "react";
import Cardapio from "./views/Cardapio.jsx";
import Destaques from "./views/Destaques.jsx";
import Header from "./views/Header.jsx";
import Ofertas from "./views/Ofertas.jsx";

function App() {
  return (
    <>
      <Header />
      <Destaques />
      <Ofertas />
      <Cardapio />
    </>
  );
}

export default App;
