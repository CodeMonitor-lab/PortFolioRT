import React from 'react'
import {SocialIcon } from '../index'

const Footer = () => {
  return (
    <main className='min-h-full bg-gradient-to-br from-purple-500' >
      <section className='flex flex-col gap-4 justify-center items-center py-5' >
        <div>
          <SocialIcon/>
        </div>
        <div>
          <h1 className='text-sm sm:text-xl font-extrabold' >Building scalable solutions with clean code.</h1>
          <p className='text-center text-purple-900 font-bold' >In love ❤️ with code </p>
        </div>
      <div className=' border-t py-4 w-full' >
        <span className=' text-lg font-sans flex items-center justify-center'><strong>&copy;2025 portfolio All Rights Reseverd </strong></span>
      </div>
      </section>
    </main>
  )
}

export default Footer