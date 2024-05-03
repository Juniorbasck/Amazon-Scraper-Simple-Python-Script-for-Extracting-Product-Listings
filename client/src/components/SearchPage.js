import React, { useState } from 'react'
import axios from 'axios'
import Product from './Products';

export default function MainPage() {
    
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    const getProducts = async (event) => {
        event.preventDefault();
        try{
            if (!keyword.trim()) {
                setError("Digite uma palavra para ser buscada");
                return;
            }
            const response = await axios.get(`http://localhost:5000/api/scrape?keyword=${keyword}`);
            setProducts(response.data);
        } catch (error) {
            console.log("erro ao buscar produtos: ", error);
            setError("Ocorreu um erro ao buscar os produtos. Por favor, tente novamente.");
        }
    };

    const limpar = () => {
        setProducts([]);
    }

    return ( 
    <div>
        <form onSubmit={getProducts}>
            <div className="flex flex-col items-center justify-center space-y-12">
                <div className="border-b border-gray-900/10 pb-7 mt-5 ">
                    <p className="mt-1 text-5xl font-semibold leading-6 text-gray-600">
                        O que você deja buscar?
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
                <div className="sm:col-span-4">
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                name="keyword"
                                id="keyword"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Ex: laptop"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                />
                            <button type='submit' className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded">
                                Pesquisar
                            </button>
                            <button type='button' className="bg-gray-500 hover:bg-gray-600 text-white font-semibold ml-4 px-4 py-2 rounded"
                                onClick={limpar}>
                                Limpar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <Product keyword={keyword} products={products}/>
        <div className='flex flex-col items-center justify-center mt-10"'>
            <span className='font-semibold leading-6 text-red-600'>
                {error && <p>{error}</p>}
            </span>
        </div>
    </div>
  )
}