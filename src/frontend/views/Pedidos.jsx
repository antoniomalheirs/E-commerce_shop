// import React, { useState } from 'react';

// const Pedidos = () => {
//   const [pedido, setPedido] = useState('');
//   const [itens, setItens] = useState([]);

//   const adicionarItem = () => {
//     if (pedido.trim() !== '') {
//       setItens([...itens, pedido]);
//       setPedido('');
//     }
//   };

//   const removerItem = (index) => {
//     const novosItens = [...itens];
//     novosItens.splice(index, 1);
//     setItens(novosItens);
//   };

//   return (
//     <div className="container mx-auto mt-10" id='pedidos'>
//       <h1 className="text-3xl font-bold mb-5">Faça seu Pedido</h1>
//       <div className="mb-5">
//         <input
//           type="text"
//           placeholder="Digite seu pedido"
//           value={pedido}
//           onChange={(e) => setPedido(e.target.value)}
//           className="border border-gray-300 p-2 mr-2"
//         />
//         <button
//           onClick={adicionarItem}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Adicionar Pedido
//         </button>
//       </div>
//       <ul>
//         {itens.map((item, index) => (
//           <li key={index} className="mb-2">
//             {item}
//             <button
//               onClick={() => removerItem(index)}
//               className="ml-3 bg-red-500 text-white px-2 py-1 rounded"
//             >
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pedidos;
