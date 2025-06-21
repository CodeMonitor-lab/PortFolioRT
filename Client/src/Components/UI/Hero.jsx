import React from 'react'
import {ProfileImage} from '../index'
import { TiArrowRightThick } from "react-icons/ti";

const Hero = () => {
  const headerData = [
    {
      heading: "Craft full stack web solutions that merge thoughtful design with powerful functionality from responsive interfaces to scalable APIs.",
      para: "As a full stack developer, I enjoy bridging the gap between elegant user interfaces and efficient backend systems, creating seamless digital experiences."
    }
  ]
  console.log(headerData)

  return (
    <main className='min-w-screen bg-gradient-to-b from-purple-200 to-bg-purple-300 border-w-full' >
      <section className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 justify-center px-5 sm:px-16 py-7 sm:py-16' >
      <div className='flex justify-centern text-center sm:text-center' >
          {/* <h1 className='flex md:leading-13.5 text-center md:text-left leading-10 text-6xl font-serif font-black ' >{headerData[0].heading}</h1> */}
          <h1 className="text-center text-purple-900 md:text-left leading-10 sm:leading-[4.275rem] md:leading-[3.9rem] sm:text-6xl md:text-5xl text-3xl font-serif font-extrabold">{headerData[0].heading}</h1>

        </div>
        <article className='p-3 gap-2 ' >
        <div className='hidden sm:block' >
        <ProfileImage/>
        </div>
          <div className='flex justify-center pt-1 sm:pt-4'>
          <p className='text-xl text-violet-950 text-shadow-black text-center md:text-center leading-7 sm:leading-10 font-serif font-light md:text-3xl sm:text-3xl sm:pb-3 pb-3 ' >{headerData[0].para}</p>
          </div>
          <div className='flex items-center justify-center font-extrabold text-lg gap-1 py-2' >
          <button className='cursor-pointer text-xl text-sky-900 shadow-sm hover:bg-gradient-to-br bg-gradient-to-tl from-purple-200 to-purple-400 rounded-full px-7 py-2 ' >Discover Profile </button>
          <TiArrowRightThick className='relative' size={25} color={'darkblue'} />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Hero