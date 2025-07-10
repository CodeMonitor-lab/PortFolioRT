import React from 'react'
import team from '../assets/team.jpg'
import {AboutSummery} from '../Components/index'
import analytic from '/analytics.svg'

const About = () => {
  const heading = "We're a brand innovation studio with a penchant for practicality."
  const para = "We make brands that get to work, which means going beyond guidelines and into reality. It means positioning our clients for the future, helping them scale globally and catch the world’s attention. It means treating every brief as the most important opportunity we’ve ever had"
  const para2 = "We’re a brand innovation studio with a deep-rooted passion for practicality and purpose-driven design. Our team blends strategy, creativity, and technology to build meaningful digital experiences that connect with users and drive real impact."

  return (
    <main>
      <section className='flex flex-col' >
        <article className='flex flex-col gap-4 ' >
          <p className='text-2xl font-bold ' >About us!</p>
          <h1 className='text-6xl leading-15 font-bold  font-serif'  >{heading}</h1>
          <img className='w-full h-150 rounded-md '  src={team} alt="" />
          <div className='flex gap-20' >
           <div className='flex flex-col gap-2' >
          <p className='text-2xl leading-9 ' >{para}</p>
          <p className='text-2xl leading-9 '  >{para2}</p>
           </div>
           <img className='w-100' src={analytic} alt="" />
          </div>
        </article>
      </section>
      <AboutSummery/>
    </main>
  )
}

export default About