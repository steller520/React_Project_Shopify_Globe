import { createSlice } from "@reduxjs/toolkit";
//  Slice for managing cart state
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        // Add item to cart or increase quantity if it already exists
        addItem: (state, action) => {
            if (!state.items.find(item => item.id === action.payload.id)) {
                state.items.push(action.payload);
            }else {
                state.items = state.items.map(item => 
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        },
        // Remove item from cart by filtering it out
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        // Calculate total amount based on items and their quantities
        calculateTotal: (state) => {
            state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        // Change quantity of a specific item in the cart
        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            state.items = state.items.map(item => 
                item.id === id ? { ...item, quantity: quantity } : item
            );
        },
        // Clear the entire cart
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }

    },
});

export const { addItem, removeItem, calculateTotal, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
