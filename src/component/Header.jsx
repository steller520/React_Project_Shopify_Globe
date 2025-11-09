import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { useSelector } from 'react-redux';

// Header component with navigation links
function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const cartItems = useSelector(store => store.cart.items || []);
    console.log("Cart Items in Header:", cartItems);
    const handleDropDown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    
    return (
        <>
            <header id='header' className={`flex ${dropdownVisible ? 'mb-20 md:mb-auto' : ''}  sticky shadow-white/10 top-0 z-10 md:justify-between  items-center p-4 h-18 shadow-md text-xl font-bold bg-linear-to-r from-yellow-800 via-amber-700 to-yellow-900 w-full text-white`}>
                {/* Logo and Title */}
                <div className='md:ml-4 w-full  flex justify-between md:justify-normal items-center gap-4'>
                    <img onMouseOver={handleDropDown} src="/src/assets/shopifyglobe.svg" alt="Shopify Globe" className='md:w-10 md:h-10 w-12 h-12' />
                    <h1 className='text-2xl font-bold'>Shopify Globe</h1>
                </div>
                <nav>
                    {
                        dropdownVisible ? (
                            <ul className='absolute border w-full top-18 left-0 bg-linear-to-r from-yellow-800 via-amber-700 to-yellow-900 md:bg-inherit md:static gap-8 md:mr-4 md:flex'>
                                {/* Navigation links */}
                                <li><Link to="/" className='hover:text-yellow-300 transition-colors flex border-b justify-center md:justify-normal items-center gap-2'><TiHomeOutline className='inline-block mr-1 md:w-8 md:h-8' />Home</Link></li>
                                <li><Link to="/cart" className='hover:text-yellow-300 transition-colors justify-center md:justify-normal flex items-center gap-2'><IoCartOutline className='inline-block mr-1 md:w-8 md:h-8' />Cart({cartItems.length})</Link></li>
                            </ul>
                        ): (

                            <ul className='hidden md:flex md:bg-inherit gap-8 md:mr-4'>
                                {/* Navigation links */}
                                <li><Link to="/" className='hover:text-yellow-300 transition-colors flex items-center gap-2'><TiHomeOutline className='inline-block mr-1 md:w-8 md:h-8' />Home</Link></li>
                                <li><Link to="/cart" className='hover:text-yellow-300 transition-colors flex items-center gap-2'><IoCartOutline className='inline-block mr-1 md:w-8 md:h-8' />Cart({cartItems.length})</Link></li>
                            </ul>
                        )
                    }
                </nav>

            </header>
        </>
    )
}

export default Header