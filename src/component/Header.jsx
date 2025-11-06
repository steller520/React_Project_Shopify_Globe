import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";

// Header component with navigation links
function Header() {
    return (
        <header id='header' className='flex justify-between items-center p-4 h-18 shadow-md text-xl font-bold bg-linear-to-r from-yellow-800 via-amber-700 to-yellow-900 w-full text-white'>
            {/* Logo and Title */}
            <div className='ml-4 flex items-center gap-2'>
                <img src="/src/assets/shopifyglobe.svg" alt="Shopify Globe" className='w-10 h-10' />
                <h1 className='text-2xl font-bold'>Shopify Globe</h1>
            </div>
            <nav>
                <ul className='flex gap-8 mr-4'>
                    {/* Navigation links */}
                    <li><Link to="/" className='hover:text-yellow-300 transition-colors flex items-center gap-2'><TiHomeOutline className='inline-block mr-1 w-8 h-8' />Home</Link></li>
                    <li><Link to="/cart" className='hover:text-yellow-300 transition-colors flex items-center gap-2'><IoCartOutline className='inline-block mr-1 w-8 h-8' />Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header