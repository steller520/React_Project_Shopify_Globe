import React, { useEffect, useState } from 'react'
import useFetchProducts from '../utils/useFetchProducts'
import ProductItem from './ProductItem';

// Component to display a list of products
function ProductList() {
    // Fetch products using the custom hook
    const products = useFetchProducts();
    // Filter products based on selected category
    const [filteredProducts, setFilteredProducts] = useState([]);
    // useEffect to update filtered products when products change
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Handle category click to filter products
    const handleClick = (event) => {
        const category = event.target.value;
        const filtered = products.filter(product => product.category.toLowerCase() === category);
        setFilteredProducts(filtered);
    }

    console.log(filteredProducts);
    // Extract unique categories from the products
    const categories = [...new Set(products.map(product => product.category))];
    console.log(categories);
    return (
        <div>
            {<div className='flex flex-wrap lg:flex-nowrap md:gap-6 gap-4 mt-10 mb-4 mx-auto justify-center max-w-7xl'>
                {categories.map((category, index) => (
                    <button key={index} value={category.toLowerCase()} onClick={(e) => handleClick(e)} className='flex justify-center items-center border bg-linear-to-r from-green-400 to-yellow-500 text-white shadow-2xl border-green-500 lg:w-64 lg:h-18 w-32 h-12 rounded-2xl'>
                        {category.toUpperCase()}
                    </button>
                ))}
                <button onClick={() => setFilteredProducts(products)} className='flex justify-center items-center border bg-linear-to-r from-green-400 to-yellow-500 text-white shadow-2xl border-green-500 lg:w-64 lg:h-18 w-32 h-12 rounded-2xl'>
                    Reset
                </button>
            </div>
            }
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto'>
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList