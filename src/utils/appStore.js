import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import productReducer from "./ProductSlice"

const appStore = configureStore({
    reducer: {
        // Add your reducers here
        cart: cartReducer,
        products: productReducer,
    },
});

export default appStore;