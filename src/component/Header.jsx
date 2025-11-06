import React from 'react'

function Header() {
    return (
        <header id='header' className='flex justify-between items-center p-4 h-18 shadow-md text-xl font-bold bg-yellow-800 w-full text-white'>
            <div className='ml-4 flex items-center gap-2'>
                <img src="/src/assets/shopifyglobe.svg" alt="Shopify Globe" className='w-10 h-10' />
                <h1 className='text-2xl font-bold'>Shopify Globe</h1>
            </div>
            <nav>
                <ul className='flex gap-8 mr-4'>
                    <li><a href="/" className='hover:text-yellow-300 transition-colors'>Home</a></li>
                    <li><a href="/cart" className='hover:text-yellow-300 transition-colors'>Cart</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header