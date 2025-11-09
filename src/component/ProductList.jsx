import React, { useEffect, useState } from 'react'
import useFetchProducts from '../utils/useFetchProducts'
import ProductItem from './ProductItem';
import { IoSearchSharp } from "react-icons/io5";

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

    // Handle search input to filter products by title
    const handleSearch = (query) => {
        const searchedProducts = products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(searchedProducts);
    }

    return (
        <div>
            <div className='flex flex-wrap lg:flex-nowrap md:gap-6 gap-4 mt-10 mb-4 mx-auto justify-center max-w-7xl'>
                {categories.map((category, index) => (
                    <button key={index} value={category.toLowerCase()} onClick={(e) => handleClick(e)} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-blue-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-blue-600 transition-all'>
                        {category.toUpperCase()}
                    </button>
                ))}
                <button onClick={() => setFilteredProducts(products)} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-blue-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-blue-600 transition-all'>
                    Reset
                </button>
            </div>
            <div className='flex items-center justify-between p-8 bg-blue-100 max-w-7xl mx-auto border border-blue-300 rounded-lg h-10 shadow-md'>
                <h1 className='ml-4 text-3xl text-blue-800 font-semibold ' >Search</h1>
                <div className='flex justify-between items-center w-auto gap-1.5'>
                    <IoSearchSharp className=' ml-2 w-8 h-8 text-blue-600 text-2xl mt-2' />
                    <input onChange={(e) => {handleSearch(e.target.value)}} className='border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white' type="text" placeholder='Search products...' />
                </div>
            </div>
            <ul className='grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto list-none'>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <ProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList