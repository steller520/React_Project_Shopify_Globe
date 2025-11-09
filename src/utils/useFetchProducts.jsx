import { useEffect, useState } from 'react'

// Custom hook to fetch products
function useFetchProducts() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch products from the API when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (e) {
                setError(e.message);
                console.error("Error fetching products:", e);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts()
    }, [])

    // Return the fetched products, loading state, and error
    return { products, loading, error };
}

export default useFetchProducts