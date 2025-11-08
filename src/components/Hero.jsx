import React, { useEffect } from 'react'
import heroimg from '../assets/hero.png'
import backgroundimage from '../assets/hero_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div className='w-full h-auto flex lg:flex-row flex-col justify-between items-center lg:px-20 px-5 lg:pt-[150px] pt-[120px] lg:pb-20 pb-[60px] gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundimage})` }}>

      <div className='lg:w-1/2 w-full flex flex-col gap-5 items-start justify-center'>
        <h1 data-aos='zoom-in' data-aos-delay='50' className='text-green-600 uppercase  font-poppins'>For Seamless IT Solutions</h1>
        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em]'>Transforming Ideas into digital success.</h1>
        <p data-aos='zoom-in' data-aos-delay='100' className='text-gray-300 text-[18px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam facere quod officiis, sint dignissimos atque. Dignissimos, molestias! Cupiditate, dicta asperiores!</p>
        <button data-aos='slide-up' aos-data-delay='230' className='bg-green-500 hover:bg-gray-300 hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md uppercase cursor-zoom-in'>explore more solutions</button>
      </div>

      <div className='lg:1/2 w-full flex justify-center items-center'>
        <div data-aos='zoom-in' className='lg:w-[80%] w-full flex justify-center items-center px-5 pt-5 bg-green-300/30 z-10 rounded-md'>
          <div className='opacity-100'>
            <img src={heroimg} alt="" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero
