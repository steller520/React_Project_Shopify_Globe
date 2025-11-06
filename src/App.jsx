import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// Main application component
function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a loading delay of 1 second
  }, []);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-16 w-16 animate-pulse"></div>
    </div>
  );

  return (
    // App container with background image and styles
    <>
      {isLoading && <LoadingSpinner />}
      <div className="App  bg-contain min-h-screen backdrop-blur-md" style={{ backgroundImage: `url('/src/assets/background.jpg')` }}>
        {/* Background overlay */}
        <div className=" bg-white/15 min-h-screen">
          <Provider store={appStore}>
            <Header />
            <Outlet /> {/* Renders the matched child route component */}
          </Provider>
        </div>
      </div>
    </>
  )
}

export default App