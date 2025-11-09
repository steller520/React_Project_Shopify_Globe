# Shopify Globe - React E-Commerce App

[GitHub Repository](https://github.com/steller520/React_Project_Shopify_Globe)

This is a modern, responsive e-commerce application built with React, Vite, Redux Toolkit, and Tailwind CSS. It features a clean UI, product filtering, a shopping cart, and a checkout process.

## Features

- **Product Listing:** View all products with search and category filtering.
- **Product Details:** Click on a product to see more details and add it to the cart.
- **Shopping Cart:** Add, remove, and change the quantity of items in your cart.
- **Checkout:** A simple and clean checkout form with validation.
- **Responsive Design:** Works on all screen sizes, from mobile to desktop.
- **Lazy Loading:** Components and images are lazy-loaded for better performance.
- **State Management:** Uses Redux Toolkit for centralized state management.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/steller520/React_Project_Shopify_Globe.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd React_Project_Shopify_Globe
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:
```bash
npm run build
```
The optimized files will be in the `dist` directory.

## Project Structure

```
/src
|-- /assets
|-- /component
|   |-- Cart.jsx
|   |-- Checkout.jsx
|   |-- Header.jsx
|   |-- ProductDetails.jsx
|   |-- ProductItem.jsx
|   |-- ProductList.jsx
|-- /utils
|   |-- appStore.js
|   |-- CartSlice.jsx
|   |-- ProductSlice.jsx
|   |-- useFetchProducts.jsx
|-- App.jsx
|-- main.jsx
```

## Key Learnings & Concepts Implemented

- **React Hooks:** `useState`, `useEffect`, `useDispatch`, `useSelector`
- **Custom Hooks:** `useFetchProducts` for fetching data
- **Redux Toolkit:** `createSlice`, `configureStore` for state management
- **React Router:** `createBrowserRouter`, `Outlet`, `useParams`, `useNavigate`
- **Performance Optimization:**
  - **Lazy Loading:** `React.lazy` and `Suspense` for route-based code splitting
  - **Image Optimization:** Native `loading="lazy"` attribute
- **Component-Based Architecture:** Reusable and modular components
- **Responsive Design:** Using Tailwind CSS for a mobile-first approach
- **Form Handling & Validation:** Client-side validation in the checkout form
- **ES6+ Features:** Spread operator, arrow functions, etc.
