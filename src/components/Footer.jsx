import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black h-auto flex flex-col items-start justify-center lg:px-20 px-5 lg:py-[50px] py-[30px] gap-[60px]'>
      <div className='w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]'>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px] '>
          <div className='text-green-500 font-bold text-left lg:text-3xl'>
            <span>NextGen IT Services <span className='text-white'>.</span></span>
          </div>

          <p className='text-gray-300 text-md '>Feel free to call us during work hours Mon - Fri 0800 - 1830. Our team will be happy to help and anser your queries</p>

          <div className='flex justify-center items-center gap-2 text-white'>
            {<FaPhoneVolume className='text-green-500 size-5' />} +210 123 456 7890
          </div>

          <div className='flex justify-center items-center gap-6'>
            <FaFacebookF className='size-4 text-white hover:text-green-500 cursor-pointer' />
            <FaTwitter className='size-4 text-white hover:text-green-500 cursor-pointer' />
            <FaLinkedinIn className='size-4 text-white hover:text-green-500 cursor-pointer' />
            <FaInstagram className='size-4 text-white hover:text-green-500 cursor-pointer' />
          </div>

        </div>

        <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-6'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em]'>Our Company</h1>
          <ul className='flex flex-col justify-center items-center gap-2'>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Home</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>About Us</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Pricing</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Testimonials</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Contact Us</li>
          </ul>
        </div>

        <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-6'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em]'>Our Company</h1>
          <ul className='flex flex-col justify-center items-center gap-2'>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Home</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>About Us</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Pricing</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Testimonials</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer text-md'>Contact Us</li>
          </ul>
        </div>

        <div className='lg:w-[30%] w-full flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em]'>subscribe to our newsletter</h1>
          <div className='flex flex-col justify-center items-start w-full'>
            <input type="text" className='w-full p-4 bg-transparent border-2 border-gray-800 rounded-md' />
            <button className='w-full bg-green-500 hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>
              subscribe
            </button>
          </div>
        </div>

      </div>

      <div className='w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-2.5'>
        <p className='text-gray-300 text-md text-center'>Copyright 2025 NextGen IT. All rights reserved</p>
        <ul className='text-gray-300 flex justify-center items-end gap-6'>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
