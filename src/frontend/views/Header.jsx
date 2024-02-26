import React, { useState } from "react";
//import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black">
      <div className=" text-red-500 flex justify-between items-center max-w=[1240px] mx-auto h-20 px-4 text-l">
        <h1 className="text-3xl font-bold primary-color ml-4">
          Cardapio Online
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#destaques">Destaques</a>
          </li>
          <li className="p-5">
            <a href="#ofertas">Ofertas</a>
          </li>
          <li className="p-5">
            <a href="#cardapio">Cardapio</a>
          </li>
          <li className="p-5">
            <a href="#">Pedidos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
