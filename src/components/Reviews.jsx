import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { reviews } from '../export.js'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='testimonials' className='w-full h-auto flex flex-col items-center justify-center lg:px-20 px-5 lg:py-20 py-[60px] gap-5'>
      <h1 data-aos='zoom-in' data-aos-delay='50' className='uppercase text-sm text-green-500'>client voices</h1>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center'>stories of success from our clients</h1>
      <p data-aos='zoom-in' data-aos-delay='150' className='text-gray-500 text-md lg:w-[60%] w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic possimus, blanditiis facere autem nemo voluptatibus quibusdam quae perferendis veritatis?</p>

      <div data-aos='slide-up' data-aos-delay='200' className='w-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center lg:gap-6 gap-3 mt-6'>
        {
          reviews.map( (review, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-4 bg-gray-100 hover:bg-green-100 lg:py-12 py-5 lg:px-8 px-4 rounded-md cursor-pointer'>
              <button className='flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full'>
                {review.rating} <FaStar className='text-yellow-500' />
              </button>
              <p className='text-gray-500 text-sm text-left'>{review.about}</p>
              <div className='mt-5'>
                <h1 className='text-green-500 text-md text-left capitalize'>{review.name}</h1>
                <h1 className='text-gray-700 font-medium text-sm text-left capitalize'>{review.role}</h1>
              </div>
            </div>
          ) )
        }
      </div>

      <div>

      </div>
    </div>
  )
}

export default Reviews
