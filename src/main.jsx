import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './component/NotFound.jsx'
import { lazy, Suspense } from 'react'

// Lazy load components for code splitting
const LazyCart = lazy(() => import('./component/Cart.jsx'))
const LazyProductList = lazy(() => import('./component/ProductList.jsx'))
const LazyProductDetails = lazy(() => import('./component/ProductDetails.jsx'))
const LazyCheckout = lazy(() => import('./component/Checkout.jsx'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
)

// Creates the router with routes configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/cart',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LazyCart />
          </Suspense>
        ),
      },
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LazyProductList />
          </Suspense>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LazyProductDetails />
          </Suspense>
        ),
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LazyCheckout />
          </Suspense>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  // Provides the router to the application
  <RouterProvider router={router} />
)
