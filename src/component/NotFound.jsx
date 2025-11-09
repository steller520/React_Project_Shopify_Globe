import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

// NotFound component to display when a route is not found
function NotFound() {
  // Get the error information from the route
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
        <h1 className="text-9xl font-bold m-0 text-transparent bg-clip-text bg-linear-to-r from-red-600 to-blue-600">
          404
        </h1>
        <h2 className="text-3xl font-semibold my-5 text-gray-800">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-4">
          {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
        </p>
        <p className="text-sm text-gray-500 mb-8 font-mono bg-gray-100 p-3 rounded-lg break-all">
          Path: {window.location.pathname}
        </p>
        {/* Link to go back to the previous page */}
        <Link 
          to="/"
          className="inline-block py-3 px-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white no-underline rounded-lg text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
