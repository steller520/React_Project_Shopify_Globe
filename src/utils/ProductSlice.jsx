import { createSlice } from "@reduxjs/toolkit";

// Slice for managing product filtering state
const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        filteredProducts: [],
        searchQuery: "",
        selectedCategory: null,
    },
    reducers: {
        // Set all products when fetched
        setProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },
        // Filter by search query
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase();
            state.searchQuery = query;
            state.filteredProducts = state.allProducts.filter(product =>
                product.title.toLowerCase().includes(query)
            );
        },
        // Filter by category
        filterByCategory: (state, action) => {
            const category = action.payload.toLowerCase();
            state.selectedCategory = category;
            state.filteredProducts = state.allProducts.filter(
                product => product.category.toLowerCase() === category
            );
        },
        // Reset filters
        resetFilters: (state) => {
            state.filteredProducts = state.allProducts;
            state.searchQuery = "";
            state.selectedCategory = null;
        },
    },
});

export const { setProducts, searchProducts, filterByCategory, resetFilters } = productSlice.actions;
export default productSlice.reducer;
