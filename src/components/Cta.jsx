import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import backgroundImg from '../assets/hero_bg.jpg'

const Cta = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='contact' className='w-full h-auto flex flex-col items-center justify-center lg:px-20 px-5 lg:py-20 py-10 gap-5 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 data-aos='zoom-in' data-aos-delay='50' className='text-green-500 uppercase text-sm '>ready to get started</h1>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center'>let's elevate your business with us</h1>
      <p data-aos='zoom-in' data-aos-delay='150' className='text-gray-300 text-md lg-[60%] w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero possimus dicta voluptas ipsa sint cumque, corporis facilis accusantium adipisci optio ipsum sed iusto aliquam, itaque aperiam quaerat magni magnam minima deleniti ab, libero veritatis?</p>

      <div data-aos='slide-up' data-aos-delay='200' id='two buttons' className='flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5'>
        <button className='bg-green-500 hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md uppercase'>
          contact us
        </button>
        <button className='bg-white hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md uppercase'>
          reach us
        </button>
      </div>
    </div>
  )
}

export default Cta
