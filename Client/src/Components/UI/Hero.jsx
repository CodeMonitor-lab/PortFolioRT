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

  return (
    <main className='px-4 py-14 sm:px-24 md:px-8 bg-amber-400' >
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-20 justify-center' >
      <div className='flex justify-centern text-center sm:text-center' >
          {/* <h1 className='flex md:leading-13.5 text-center md:text-left leading-10 text-6xl font-serif font-black ' >{headerData[0].heading}</h1> */}
          <h1 className="text-center text-purple-950 md:text-left leading-10 sm:leading-[4.275rem] md:leading-[3.4rem] sm:text-6xl md:text-5xl text-3xl font-sans sm:font-serif font-extrabold">{headerData[0].heading}</h1>

        </div>
        <article className='bg-amber-000 gap-2 ' >
        <ul>
        <div className='hidden sm:block' >
        <ProfileImage/>
        </div>
          <div className='flex justify-center pt-1 sm:pt-6'>
          <p className='text-xl text-purple-950 text-center md:text-center leading-7 sm:leading-9 font-sans sm:font-serif font-bold sm:font-light md:text-3xl sm:text-3xl sm:pb-2 pb-3 ' >{headerData[0].para}</p>
          </div>
          <div className='flex items-center justify-center font-extrabold text-lg gap-1 py-3' >
           <li className='flex items-center justify-center gap-2 bg-amber-500 px-7 py-3 rounded-2xl '  > 
          <button className='cursor-pointer text-xl  ' >Discover Profile </button>
          <TiArrowRightThick className='relative' size={25} color={'black'} />
           </li>
          </div>
        </ul>
        </article>
      </section>
    </main>
  )
}

export default Hero