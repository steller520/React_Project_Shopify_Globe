import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, searchProducts, filterByCategory, resetFilters } from '../utils/ProductSlice'
import useFetchProducts from '../utils/useFetchProducts'
import ProductItem from './ProductItem';
import { IoSearchSharp } from "react-icons/io5";

const MemoizedProductItem = memo(ProductItem);

// Component to display a list of products
function ProductList() {
    const dispatch = useDispatch();
    
    // Fetch products using the custom hook
    const { products, loading, error } = useFetchProducts();
    
    // Get filtered products from Redux store
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const categories = useSelector((state) => 
        [...new Set(state.products.allProducts.map(product => product.category))]
    );
    
    // Set products in Redux when fetched
    useEffect(() => {
        if (products.length > 0) {
            dispatch(setProducts(products));
        }
    }, [products, dispatch]);

    // Handle loading and error states
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading Products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Oops! Something went wrong.</h2>
                    <p className="text-gray-700">We couldn't fetch the products. Please try again later.</p>
                    <p className="text-sm text-gray-500 mt-4">Error: {error}</p>
                </div>
            </div>
        );
    }

    // Handle category click to filter products
    const handleClick = (event) => {
        const category = event.target.value;
        dispatch(filterByCategory(category));
    }

    // Handle search input to filter products by title
    const handleSearch = (query) => {
        dispatch(searchProducts(query));
    }

    // Handle reset filters
    const handleReset = () => {
        dispatch(resetFilters());
    }

    return (
        <div>
            <div className='flex flex-wrap lg:flex-nowrap md:gap-6 gap-4 mt-12 mb-4 mx-auto justify-center max-w-7xl'>
                {categories.map((category, index) => (
                    <button key={index} value={category.toLowerCase()} onClick={(e) => handleClick(e)} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-yellow-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-red-600 transition-all ease-in-out'>
                        {category.toUpperCase()}
                    </button>
                ))}
                <button onClick={handleReset} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-yellow-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-red-600 transition-all'>
                    Reset
                </button>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0 md:justify-between p-8 bg-blue-100 max-w-7xl mx-auto border border-blue-300 rounded-lg h-auto md:h-10 shadow-md'>
                <h1 className='md:ml-4 text-3xl text-blue-800 font-semibold ' >Search</h1>
                <div className='flex justify-between border border-blue-600 md:border-none p-4 rounded-2xl items-center w-auto gap-1.5'>
                    <IoSearchSharp className=' ml-2 w-8 h-8 text-blue-600 text-2xl mt-2' />
                    <input onChange={(e) => {handleSearch(e.target.value)}} className='border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white' type="text" placeholder='Search products...' />
                </div>
            </div>
            <ul className='grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto list-none'>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <MemoizedProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList