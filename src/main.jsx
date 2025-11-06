import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './component/Cart.jsx'
import ProductList from './component/ProductList.jsx'

// Creates the router with routes configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/',
        element: <ProductList />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  // Provides the router to the application
  <RouterProvider router={router} />
)
