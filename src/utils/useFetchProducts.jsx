import React, { useEffect, useState } from 'react'

// Custom hook to fetch products
function useFetchProducts() {
    const [products, setProducts] = useState([])
    // Fetch products from the API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        }

        fetchProducts()
    }, [])

    // Return the fetched products
    return products
}

export default useFetchProducts