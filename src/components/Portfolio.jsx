import { React, useEffect } from 'react'
import backgroundImage from '../assets/hero_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { projects } from '../export'

const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duratio: 800,
      delay: 200,
      once: false,
    }, []);
  });

  return (
    <div id='projects' className='w-full h-auto flex flex-col items-center justify-center lg:px-20 px-5 lg:py-[60px] gap-5 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }} data-aos='zoom-in' data-aos-delay='50'>

      <h1 data-aos='zoom-in' data-aos-delay='50' className='text-green-500 uppercase text-lg'>our portfolio</h1>
      <h1 data-aos-='zoom-in' data-aos-delay='100' className='text-white lg-text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center'>Explore our portfolio and showcase our best works</h1>
      <p data-aos='zoom-in' data-aos-delay='150' className='text-gray-100 text-md lg-[60%] w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint maxime quasi, ad itaque eos doloremque odio magnam ex labore.</p>

      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center gap-10 mt-8'>
        {
          projects.map((project, index) => (
            <div key={index} className='flex flex-col justify-center items-start w-full'>
              <img src={project.img} alt="" className='w-full bg-cover bg-center' />
              <div className='bg-gray-600 p-8 flex flex-col justify-center items-start gap-4 w-full'>
                <h1 className='text-white lg:text-[25px] text-[22px] capitalize leading-[1.2em] text-left'>{project.title}</h1>
                <p className='text-gray-300 text-sm text-left'>{project.para}</p>
                <button className='text-green-500 hover-text-white text-sm font-semibold mt-5 uppercase'>view more</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
