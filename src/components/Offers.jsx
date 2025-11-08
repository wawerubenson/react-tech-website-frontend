import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { services } from '../export.js'

const Offer = () => {

  useEffect(() => {
    AOS.init({
      duratio: 800,
      delay: 200,
      once: false,
    }, []);
  });

  return (
    <div id='services' className='w-full h-auto flex flex-col items-center justify-center lg:px-20 px-5 gap-5 py-5'>
      <h1 data-aos='zoom-in' data-aos-delay='50' className='text-green-500 uppercase text-sm'>our services</h1>
      <h1 data-aos-='zoom-in' data-aos-delay='100' className='text-black lg-text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center'>Driving digital transformation with execellence</h1>
      <p data-aos='zoom-in' data-aos-delay='150' className='text-gray-500 text-md lg-[60%] w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint maxime quasi, ad itaque eos doloremque odio magnam ex labore.</p>

      <div className='w-full grid lg:grid-cols-3 justify-center items-center gap-6 mt-6'>
        {
          services.map((service, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-green-100 rounded-md cursor-pointer'>
              <service.icon className='size-[35px] mb-5' />
              <h1 className='text-black text-[25px] capitalize leading-[1.2em]'>{service.title}</h1>
              <p className='text-gray-500 text-sm '>{service.para}</p>
              <button className='text-green-500 hover:text-black text-sm font-semibold uppercase mt-10'>Learn More</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Offer
