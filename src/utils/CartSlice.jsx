import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
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
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
