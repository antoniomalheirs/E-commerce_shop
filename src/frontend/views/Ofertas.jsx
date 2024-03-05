import React from 'react';
//import ofertas from '../assets/ofertas.webp'
const Ofertas = () => {
    return (
        <div className='py-10 text-white bg-[#232325] h-auto' id='ofertas'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                <div>
                    <div className='w-[400px] h-full'>
                    <img
                     src=""
                     alt=""
                     className='rounded-xl w-[300px] sm:w-[400px] mx-auto h-auto '
                     />
                    </div>
                </div>

                <div>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5'>Ofertas</h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis reprehenderit suscipit itaque molestiae accusantium a odio repellat provident. Aperiam labore adipisci illum ut tempore architecto iure dolorum dicta laborum perferendis?
                            </p>
                        </div>

                    </div>

                    <div className='flex mt-10 items-center gap-7'>
                        <div className="bg-red-600 p-5 rounded-lg">
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                Combo Dog
                            </h3>
                            <p>
                                <span className='md:text-base text-xs'>
                                    1 HotDog simples+ 1 coca 1l.
                                </span>
                            </p>
                            <p>
                                <span className='md:text-base text-xs'>
                                    Preço: R$ 29,90
                                </span>
                            </p>
                            
                        </div>

                        <div className="bg-red-600 p-5 rounded-lg">
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                Combo Dog
                            </h3>
                            <p>
                                <span className='md:text-base text-xs'>
                                    1 HotDog simples+ 1 coca 1l.
                                </span>
                            </p>
                            <p>
                                <span className='md:text-base text-xs'>
                                    Preço: R$ 29,90
                                </span>
                            </p>
                            
                        </div>

                        <div className="bg-red-600 p-5 rounded-lg">
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                Combo Dog
                            </h3>
                            <p>
                                <span className='md:text-base text-xs'>
                                    1 HotDog simples+ 1 coca 1l.
                                </span>
                            </p>
                            <p>
                                <span className='md:text-base text-xs'>
                                    Preço: R$ 29,90
                                </span>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ofertas;
