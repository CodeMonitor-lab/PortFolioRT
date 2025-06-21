import React from 'react'
import {SocialIcon } from '../index'

const Footer = () => {
  return (
    <main className='bg-gradient-to-br from-purple-500' >
      <section className='flex flex-col gap-4 justify-center items-center py-5' >
        <div>
          <SocialIcon/>
        </div>
        <div>
          <h1 className='text-1xl sm:text-xl font-extrabold' >Building scalable solutions with clean code.</h1>
          <p className='text-center text-purple-900 font-bold' >In love ❤️ with code </p>
        </div>
      </section>
      <div className=' border-1 py-4' >
        <span className=' text-lg font-sans flex items-center justify-center'><strong>&copy;2025 portfolio All Rights Reseverd </strong></span>
      </div>
    </main>
  )
}

export default Footer