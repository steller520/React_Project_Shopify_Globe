import React, { useState } from 'react'

// Component to display individual product details
function ProductItem({ product }) {
    // State to manage the expanded/collapsed view of the description
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the description view
    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="flex flex-col border border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-white/80 hover:shadow-xl transition-shadow duration-300">
            <img className='w-full h-48 object-contain mb-4' src={product.images[0] || product.images[1] || product.images[2]} alt={product.title} />
            <h3 className='text-xl font-semibold mb-2 text-gray-800 line-clamp-2'>{product.title}</h3>
            {/* Description */}
            <p><span className={`text-sm text-gray-600 mb-3 line-clamp-2 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>{product.description}</span><span onClick={handleReadMore} className='text-green-500 hover:underline hover:text-green-700 transition:color duration-300'>Read more</span>
            </p>
            <p className='text-lg  font-bold text-green-600'>Price: ${product.price}</p>
            <button className='mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300'>Add to Cart</button>
        </div>
    )
}

export default ProductItem