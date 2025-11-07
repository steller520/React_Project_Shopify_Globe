import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { calculateTotal } from '../utils/CartSlice';
import { Navigate, useNavigate } from 'react-router-dom';

function Cart() {
    // Initialize useDispatch and useSelector
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    // Initialize cartItems and totalAmount
    const cartItems = cart.items;
    const totalAmount = cart.totalAmount;
    // Calculate total amount whenever cart items change
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch]);
    // Initialize useNavigate
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }
   
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
                                    <CartItem item={item} />
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl font-semibold text-gray-800">Total:</span>
                                <span className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</span>
                            </div>
                            <button onClick={() => handleNavigate('/checkout')} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
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