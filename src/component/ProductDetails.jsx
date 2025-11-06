import React, { useEffect, useState } from 'react'
import useFetchProducts from '../utils/useFetchProducts'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    // fetch all products
    const product = useFetchProducts();

    // import the id parameter from the URL
    const { id } = useParams();

    // single product state
    const [singleProduct, setSingleProduct] = useState(null);

    // Find the product by ID
    useEffect(() => {
        const foundProduct = product.find(item => item.id === parseInt(id));
        console.log(foundProduct);
        setSingleProduct(foundProduct);
    }, [id, product]);

    console.log(singleProduct);

return (
    <div className="min-h-screen bg-gray-50 py-8">
            {singleProduct ? (
                    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg gap-8">
                            <div className="shrink-0 flex justify-center items-start">
                                    <img className="w-full md:w-96 h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                                             src={singleProduct.images[0] || singleProduct.images[1] || singleProduct.images[2]} 
                                             alt={singleProduct.title} />
                            </div>
                            <div className="flex-1">
                                    <h2 className="text-4xl font-bold mb-4 text-gray-800">{singleProduct.title}</h2>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{singleProduct.description}</p>
                                    <div className="flex items-center gap-4 mb-6">
                                            <p className="text-3xl font-bold text-blue-600">${singleProduct.price}</p>
                                            {singleProduct.discountPercentage > 0 && (
                                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                            {singleProduct.discountPercentage}% OFF
                                                    </span>
                                            )}
                                    </div>
                                    <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
                                            <p className="text-gray-700"><span className="font-semibold text-gray-900">Category:</span> <span className="capitalize">{singleProduct.category}</span></p>
                                            <p className="text-gray-700"><span className="font-semibold text-gray-900">Brand:</span> {singleProduct.brand}</p>
                                            <p className="text-gray-700"><span className="font-semibold text-gray-900">Stock:</span> 
                                                    <span className={`ml-2 ${singleProduct.stock > 10 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                                                            {singleProduct.stock} {singleProduct.stock > 0 ? 'available' : 'out of stock'}
                                                    </span>
                                            </p>
                                            <p className="text-gray-700 flex items-center">
                                                    <span className="font-semibold text-gray-900">Rating:</span> 
                                                    <span className="ml-2 text-yellow-500 font-semibold">{singleProduct.rating} ⭐</span>
                                            </p>
                                            {singleProduct.tags && singleProduct.tags.length > 0 && (
                                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                                            <span className="font-semibold text-gray-900 block mb-3">Tags: </span>
                                                            <div className="flex flex-wrap gap-2">
                                                                    {singleProduct.tags.map((tag, index) => (
                                                                            <span key={index} className="inline-block bg-blue-100 hover:bg-blue-200 transition-colors rounded-full px-4 py-1.5 text-sm font-medium text-blue-700">
                                                                                    #{tag}
                                                                            </span>
                                                                    ))}
                                                            </div>
                                                    </div>
                                            )}
                                    </div>
                                    <button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
                                            Add to Cart
                                    </button>
                            </div>
                    </div>
            ) : (
                    <div className="flex justify-center items-center min-h-[60vh]">
                            <div className="text-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                                    <p className="text-xl text-gray-600 font-medium">Loading product details...</p>
                            </div>
                    </div>
            )}
    </div>
)
}

export default ProductDetails