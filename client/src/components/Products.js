import React, { useState, useEffect } from "react";

export default function Product(props){
    const products = props.products || [];
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* <p>Palavra-chave: {keyword}</p>  */}
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-gray-200 rounded-md overflow-hidden shadow-md">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto object-cover object-center"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    <a href={product.href} className="hover:text-blue-600">{product.title}</a>
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">Rating: {product.rating}</p>
                                <p className="text-sm text-gray-600 mb-4">Reviews: {product.reviews}</p>
                                <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}