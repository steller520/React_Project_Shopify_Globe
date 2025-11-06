import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

// Main application component
function App() {
  return (
    // App container with background image and styles
    <div className="App  bg-contain min-h-screen backdrop-blur-md" style={{ backgroundImage: `url('/src/assets/background.jpg')` }}>
      {/* Background overlay */}
      <div className=" bg-white/15 min-h-screen">
        <Header />
        <Outlet /> {/* Renders the matched child route component */}
      </div>
    </div>
  )
}

export default App