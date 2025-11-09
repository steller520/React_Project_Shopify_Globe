import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, searchProducts, filterByCategory, resetFilters } from '../utils/ProductSlice'
import useFetchProducts from '../utils/useFetchProducts'
import ProductItem from './ProductItem';
import { IoSearchSharp } from "react-icons/io5";

const MemoizedProductItem = memo(({ product }) => { 
    return (
        <ProductItem product={product} />
    )
})
// Component to display a list of products
function ProductList() {
    const dispatch = useDispatch();
    
    // Fetch products using the custom hook
    const products = useFetchProducts();
    
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
            <div className='flex flex-wrap lg:flex-nowrap md:gap-6 gap-4 mt-10 mb-4 mx-auto justify-center max-w-7xl'>
                {categories.map((category, index) => (
                    <button key={index} value={category.toLowerCase()} onClick={(e) => handleClick(e)} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-blue-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-blue-600 transition-all'>
                        {category.toUpperCase()}
                    </button>
                ))}
                <button onClick={handleReset} className='flex justify-center items-center border bg-linear-to-r from-yellow-700 to-red-700 text-white shadow-lg border-blue-600 lg:w-64 lg:h-18 w-32 h-12 rounded-lg hover:bg-blue-600 transition-all'>
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
                        <MemoizedProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList