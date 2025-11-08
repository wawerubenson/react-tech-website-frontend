import aboutbg from '../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, React } from 'react'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div id='about' className='w-full h-auto flex flex-col items-center justify-between lg:px-20 py-[60px] px-5 gap-[60px]'>

      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-2.5'>
          <h1 data-aos='fade-down-right' className='uppercase text-green-500 text-lg'>who we are</h1>
          <h1 className='text-black lg:text-[45px] text-[30px] capitalize leading-[2em]'>
            Delivering excellent IT solutions
          </h1>
          <p className='text-gray-500 text-md'>
            We are a forward-thinking technology company dedicated to building secure, scalable, and high-performance digital solutions. Our team blends technical expertise with strategic insight to help businesses innovate, automate, and grow in an increasingly digital world.
          </p>
        </div>

        <div className='lg:w-[40%] flex lg:justify-end justify-center items-center'>
          <button className='uppercase bg-green-500 hover:bg-black hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>
            learn more
          </button>
        </div>
      </div>

      <div id='bottom-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-20'>

        <div id='img-box' className='lg:w-[40%] w-full'>
          <img className='w-full bg-cover bg-center' src={aboutbg} alt="" />
        </div>

        <div id='content-box' className='lg:w-[60%] w-full flex flex-col items-start justify-between gap-[60px]'>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-blacktext-[35px] capitalize leading-[1.2em]'>Our Expertise</h1>
            <p className='text-gray-500 text-md'>
              We deliver end-to-end IT services, including software development, cloud engineering, and systems integration. Our solutions are built with an emphasis on reliability, performance, and long-term scalability.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-blacktext-[35px] capitalize leading-[1.2em]'>Custom Software Development</h1>
            <p className='text-gray-500 text-md'>
              We craft tailored digital applications that meet your exact business needs. From enterprise systems to modern web platforms, every solution is engineered for efficiency, security, and usability.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-blacktext-[35px] capitalize leading-[1.2em]'>Cloud & Infrastructure</h1>
            <p className='text-gray-500 text-md'>
              Our team builds and manages robust cloud environments across AWS, Azure, and hybrid architectures, helping organizations reduce costs and increase operational agility.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-blacktext-[35px] capitalize leading-[1.2em]'>IT Consulting & Strategy</h1>
            <p className='text-gray-500 text-md'>
              We guide businesses through complex technology decisions with clear strategic roadmaps, ensuring every digital initiative aligns with long-term objectives and delivers measurable impact.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-blacktext-[35px] capitalize leading-[1.2em]'>Cybersecurity Solutions</h1>
            <p className='text-gray-500 text-md'>
              Our cybersecurity services protect your systems and data from evolving threats through proactive monitoring, vulnerability analysis, and robust security frameworks.
            </p>
          </div>

        </div>

      </div>

    </div>
  )


}

export default About
