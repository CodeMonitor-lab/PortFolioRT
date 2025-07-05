import React from 'react'
import {SocialIcon } from '../index'

const Footer = () => {
  return (
    <main className='min-h-full bg-gradient-to-tl from-purple-100 to-purple-500 ' >
      <section className='flex flex-col gap-3 justify-center items-center pt-6' >
        <div>
          <SocialIcon/>
        </div>
        <div>
          <h1 className='text-lg text-lime-950 text-center sm:text-xl font-extrabold' >Building scalable solutions with clean code.</h1>
          <p className='text-center text-purple-900 font-bold' >In love ❤️ with code </p>
        </div>
      <div className=' border-t border-neutral-800 w-full' >
        <span className=' py-3 font-extralight  font-sans flex items-center justify-center'>&copy;2025 portfolio All Rights Reseverd</span>
      </div>
      </section>
    </main>
  )
}

export default Footer