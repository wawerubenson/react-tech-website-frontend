import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'home', to: 'hero' },
    { name: 'about', to: 'about' },
    { name: 'clients', to: 'clients' },
    { name: 'offers', to: 'offers' },
    { name: 'portfolio', to: 'portfolio' },
    { name: 'testimonials', to: 'testimonials' },
    { name: 'contact', to: 'contact' },
  ]

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <header className='bg-black py-4 lg:px-20 px-7 fixed top-0 left-0 z-50 w-full'>
      <div className='flex justify-between items-center'>
        {/* Logo start */}
        <div className='text-green-500 font-bold text-left lg:text-4xl text-3xl uppercase'>
          <span>NextGen IT <span>.</span></span>
        </div>
        {/* Logo end */}

        {/* humbager */}
        <button className='text-white text-2xl md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-10 text-lg text-white'>
            {
              menuLinks.map((link, index) => (
                <li className='capitalize' key={link.to}>
                  <Link to={link.to} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-green-500' : 'hover:text-green-500 transition-colors'}`} >
                    {link.name} </Link>
                </li>
              ))
            }
          </ul>
        </nav>

      </div>

      {/* mobile menu */}
      <div className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-hidden`}>
        <IoCloseSharp className='fixed top-3 right-6 text-3xl cursor-pointer' onClick={() => setMenuOpen(false)} />

        <ul className='flex flex-col space-y-6 text-2xl text-center'>
          {
            menuLinks.map((link, index) => (
              <li className='capitalize' key={link.to}>
                <Link to={link.to} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-green-500' : 'hover:text-green-500 transition-colors'}`} >
                  {link.name} </Link>
              </li>
            ))
          }
        </ul>
      </div>

    </header>
  )
}

export default Header
