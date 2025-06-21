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
    <main className='min-w-screen bg-gradient-to-r from-purple-300 to-bg-purple-400 shadow-sm border- w-full' >
      <section className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 justify-center px-5 sm:px-16 py-7 sm:py-16' >
      <div className='flex justify-centern text-center sm:text-center' >
          <h1 className='flex md:leading-13.5 text-center md:text-left leading-10 md:text-5xl sm:text-6xl text-3xl font-serif font-black ' >{headerData[0].heading}</h1>
        </div>
        <article className='p-3 gap-2 ' >
        {/*  */}
        <ProfileImage/>
          <div className='flex justify-center pt-1 sm:pt-4'>
          <p className='text-xl text-center md:text-center leading-7 sm:leading-10 font-medium md:text-3xl sm:text-3xl  font-serif sm:pb-3 pb-3 ' >{headerData[0].para}</p>
          </div>
          <div className='flex items-center justify-center font-extrabold text-lg gap-2 py-2' >
          <button className='cursor-pointer  shadow-sm hover:bg-gradient-to-tr bg-gradient-to-tl from-sky-300 to-purple-500 rounded-full px-5 py-2 ' >Discover Profile</button>
          <TiArrowRightThick/>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Hero