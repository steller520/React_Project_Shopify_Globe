import React from 'react'
import { useDispatch } from 'react-redux';
import { calculateTotal, removeItem, changeQuantity } from '../utils/CartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        // Logic to increment item quantity
        dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }));
        dispatch(calculateTotal());
    }
    
    const handleDecrement = () => {
        // Logic to decrement item quantity
        if (item.quantity > 1) {
            dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }));
            dispatch(calculateTotal());
        } else {
            dispatch(removeItem(item));
        }
    }

    console.log(item);

    return (
        <>
            <div className='flex items-center gap-4 mb-4 sm:mb-0'>
                <img src={item.images[0] || item.images[1] || item.images[2]} alt={item.title} className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                <span className="text-lg font-medium text-gray-800">{item.title}</span>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <span className="text-gray-700 font-semibold">${item.price} x {item.quantity}</span>
                <div className='flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg'>
                    <button onClick={handleDecrement} className='w-8 h-8 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center justify-center font-bold'>-</button>
                    <span className='font-semibold text-lg min-w-8 text-center'>{item.quantity}</span>
                    <button onClick={handleIncrement} className='w-8 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center font-bold'>+</button>
                </div>
            </div>
        </>
    )
}

export default CartItem