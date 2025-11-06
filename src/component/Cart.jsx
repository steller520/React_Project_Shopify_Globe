import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <ul className="space-y-4 mb-8">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className='flex items-center gap-4 mb-4 sm:mb-0'>
                                        <img src={item.images[0] || item.images[1] || item.images[2]} alt={item.title} className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                                        <span className="text-lg font-medium text-gray-800">{item.title}</span>
                                    </div>
                                    <div className='flex flex-col items-end gap-3'>
                                        <span className="text-gray-700 font-semibold">${item.price} x {item.quantity}</span>
                                        <div className='flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg'>
                                            <button className='w-8 h-8 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center justify-center font-bold'>-</button>
                                            <span className='font-semibold text-lg min-w-8 text-center'>{item.quantity}</span>
                                            <button className='w-8 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center font-bold'>+</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl font-semibold text-gray-800">Total:</span>
                                <span className="text-2xl font-bold text-blue-600">${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart