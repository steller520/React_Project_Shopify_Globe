import React from 'react'
import useFetchProducts from '../utils/useFetchProducts'
import ProductItem from './ProductItem';

// Component to display a list of products
function ProductList() {
    // Fetch products using the custom hook
    const products = useFetchProducts()
    console.log(products);
    const categories = [...new Set(products.map(product => product.category))];
    console.log(categories);
    return (
        <div>
            {<div className='flex flex-wrap lg:flex-nowrap md:gap-6 gap-4 mt-10 mb-4 mx-auto justify-center max-w-7xl'>
                {categories.map((category, index) => (
                    <div className='flex justify-center items-center border bg-green-500 text-white border-green-500 lg:w-64 lg:h-18 w-32 h-12 rounded-2xl'>
                        <h2 key={index}>{category}</h2>
                    </div>
                ))}
            </div>
            }
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto'>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList