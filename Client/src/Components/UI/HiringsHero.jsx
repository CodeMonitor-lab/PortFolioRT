import React from 'react'

const HiringsHero = () => {
  return (
    <section style={{backgroundColor:"var(--hero-bg)"}} className='p-10'>
         <article>
                <h1 className='pb-2  md:text-heading-md font-black text-text-primary' >We're Hiring - Join Our Team!</h1>
                <ul>
                    <p className='pb-4 text-title-md md:text-title-md font-black text-text-primary' >Let's build the future - toggether</p>
                    <ol className='text-text-primary text-para-sm flex flex-col gap-2 font-bold ' >
                    <li>Flexible Work Culture</li>
                    <li>Exciting Projects with Global Brnads</li>
                    <li>Room to Learn, Grow, and Lead</li>
                    </ol>
                </ul>
            </article>
    </section>
  )
}

export default HiringsHero