import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/CartSlice';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    // Initialize dispatch for Redux actions
    const dispatch = useDispatch();
    // Initialize navigate for routing
    const navigate = useNavigate();
    // State to track if the order has been placed
    const [isClicked, setIsClicked] = useState(false);
    // Get cart items and total amount from Redux store
    const cart = useSelector((state) => state.cart);
    const cartItems = cart.items;
    const totalAmount = cart.totalAmount;

    // State to manage form errors
    const [errors, setErrors] = useState({});

    // State to manage the redirect timer
    const [timer, setTimer] = useState(2);

    // Function to validate the checkout form
    const validateForm = () => {
        // Validate form inputs
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input');
        const newErrors = {};

        // Check for empty fields
        inputs.forEach(input => {
            const fieldName = input.name || input.placeholder.toLowerCase().replace(/\s+/g, '');
            if (!input.value.trim()) {
                newErrors[fieldName] = `${input.placeholder} is required`;
            }
        });

        // Validate email format
        const emailInput = form.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && emailInput.value.trim() && !emailRegex.test(emailInput.value)) {
            newErrors['email'] = 'Please enter a valid email address';
        }

        // Set errors state and return validation result
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle placing the order
    const handlePlaceOrder = () => {
        if (validateForm()) {
            setIsClicked(true);
            dispatch(clearCart());
        }
    }

    // Effect to handle redirect countdown after order placement
    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (isClicked) {
            // Countdown timer - decreases every second
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        navigate('/');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Cleanup interval on unmount
            return () => clearInterval(interval);
        }
    }, [isClicked, navigate]);


    return (   
        <>  {isClicked 
            // if order is placed
             ?
            <div className="min-h-screen flex items-center justify-center bg-green-50">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-4 text-green-700">Order Placed Successfully!</h2>
                    <p className="text-gray-700 mb-6">Thank you for your purchase. Your order is being processed.</p>
                    <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-gray-600">You will receive a confirmation email shortly.</p>
                    {/* Redirect countdown timer */}
                    <p>Redirecting to home page in {timer} seconds...</p>
                </div>
            </div>
            :

            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="postalcode"
                                            placeholder="Postal Code"
                                            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.postalcode ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.postalcode && <p className="text-red-500 text-sm mt-1">{errors.postalcode}</p>}
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="space-y-3">
                                <div>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex justify-between text-gray-600">
                                            <span>{item.title} </span>
                                            <span>x {item.quantity}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${totalAmount.toFixed(2)}</span>

                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>${(totalAmount * 0.05).toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                                    <span>Total</span>
                                    <span>${(totalAmount * 1.05).toFixed(2)}</span>
                                </div>
                            </div>
                            {/* button to place order */}
                            <button onClick={() => handlePlaceOrder()} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Checkout