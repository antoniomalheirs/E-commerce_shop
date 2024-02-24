import React from 'react';

const Cardapio = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id='cardapio'>
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center justify-between gap-8">
        <h2 className="text-2xl lg:text-3xl text-zinc-600"> Cardápio</h2>
          <div className="flex flex-row gap-4">
             
             <h2 className="text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"> Todos</h2>
             <h2 className="text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"> Lanches</h2>
             <h2 className="text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"> Bedidas</h2>
             
           
          </div>
        </div>
            {/* <div class="w-[700px] h-[2px] bg-yellow-400 relative my-1 mx-auto"></div> */}
        <div className="mb-8">
        
            <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Hamburguer Simples</h4>
              <p className="text-gray-400">Pão, carne, queijo, alface, tomate, cebola e maionese.</p>
              <p className="text-gray-400">R$ 10,00</p>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Pizza de Pepperoni</h4>
              <p className="text-gray-400">Massa de pizza, molho de tomate, queijo, pepperoni e orégano.</p>
              <p className="text-gray-400">R$ 20,00</p>
            </div>

          
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Salada Caesar</h4>
              <p className="text-gray-400">Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado.</p>
              <p className="text-gray-400">R$ 15,00</p>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Hamburguer Simples</h4>
              <p className="text-gray-400">Pão, carne, queijo, alface, tomate, cebola e maionese.</p>
              <p className="text-gray-400">R$ 10,00</p>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Pizza de Pepperoni</h4>
              <p className="text-gray-400">Massa de pizza, molho de tomate, queijo, pepperoni e orégano.</p>
              <p className="text-gray-400">R$ 20,00</p>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Salada Caesar</h4>
              <p className="text-gray-400">Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado.</p>
              <p className="text-gray-400">R$ 15,00</p>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
        
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Hamburguer Simples</h4>
              <p className="text-gray-400">Pão, carne, queijo, alface, tomate, cebola e maionese.</p>
              <p className="text-gray-400">R$ 10,00</p>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Pizza de Pepperoni</h4>
              <p className="text-gray-400">Massa de pizza, molho de tomate, queijo, pepperoni e orégano.</p>
              <p className="text-gray-400">R$ 20,00</p>
            </div>

           
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Salada Caesar</h4>
              <p className="text-gray-400">Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado.</p>
              <p className="text-gray-400">R$ 15,00</p>
            </div>
          </div>
        </div>
 
         <div className="mb-8">
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Hamburguer Simples</h4>
              <p className="text-gray-400">Pão, carne, queijo, alface, tomate, cebola e maionese.</p>
              <p className="text-gray-400">R$ 10,00</p>
            </div>

            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Pizza de Pepperoni</h4>
              <p className="text-gray-400">Massa de pizza, molho de tomate, queijo, pepperoni e orégano.</p>
              <p className="text-gray-400">R$ 20,00</p>
            </div>

        
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-yellow-400 text-lg font-semibold mb-2">Salada Caesar</h4>
              <p className="text-gray-400">Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado.</p>
              <p className="text-gray-400">R$ 15,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
