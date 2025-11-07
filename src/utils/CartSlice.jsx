import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            if (!state.items.find(item => item.id === action.payload.id)) {
                state.items.push(action.payload);
            }else {
                state.items = state.items.map(item => 
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        calculateTotal: (state) => {
            state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            state.items = state.items.map(item => 
                item.id === id ? { ...item, quantity: quantity } : item
            );
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }

    },
});

export const { addItem, removeItem, calculateTotal, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
