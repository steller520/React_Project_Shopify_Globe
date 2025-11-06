import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
const appStore = configureStore({
    reducer: {
        // Add your reducers here
        cart: cartReducer,
    },
});

export default appStore;