import React from 'react'
import {AboutSummery} from '../Components/index'

const About = () => {
  return (
    <main>
      <section className='flex flex-col gap-10 px-5 sm:px-20 py-10 sm:py-10 md:px-8 lg:px-30' >
      <AboutHero/>
      {/* <AboutSummery/> */}
      </section>
    </main>
  )
}
import analytic from '/analytics.svg'
import team from '../assets/team.jpg'

const AboutHero=()=>{
  const heroArticle={
    title:"About us!",
    heading: "We're a brand innovation studio with a penchant for practicality.",
    para1 :"We make brands that get to work, which means going beyond guidelines and into reality. It means positioning our clients for the future, helping them scale globally and catch the world’s attention. It means treating every brief as the most important opportunity we’ve ever had",
    para2 : "We’re a brand innovation studio with a deep-rooted passion for practicality and purpose-driven design. Our team blends strategy, creativity, and technology to build meaningful digital experiences that connect with users and drive real impact.",
    img1:team,
    img2:analytic,
  }

  return(
    <mian>
      <section className=' w-full flex flex-col gap-10 ' >
        <article>
          <div>
            <p className='text-title-md' >{heroArticle.title}</p>
            <h1 className='text-heading-lg' >{heroArticle.heading}</h1>
          </div>
            <img className='w-full h-150' src={heroArticle.img1} alt="" />
        </article>
        <article className='grid grid-cols-2 gap-20 ' >
          <div >
            <p className='text-para-md pb-3 ' >{heroArticle.para1}</p>
            <p className='text-para-md' >{heroArticle.para2}</p>
          </div>
          <div className='flex justify-end' >
          <img className='w-100 ounded-md p-2 '  src={heroArticle.img2} alt="" />
          </div>
        </article>
      </section>
    </mian>
  )
}

export default About