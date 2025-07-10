import React from 'react'

const Specialties = () => {
  return (
    <section>
      <article>
        <p className='text-title-sm md:text-title-md font-black text-text-secondary' >Our Specialties</p>
        <ul className='bg-sky-200 py-4 px-4 rounded-tr-4xl rounded-xl ' >
            <ol className='flex flex-col gap-0 font-black sm:gap-4 text-heading-sm md:text-heading-md font-primary text-text-primary leading-8 sm:leading-14' >
            <li>Brand Strategy</li>
            <li>Identity Systems</li>
            <li>Digital Experiences</li>
            <li>Next-Gen Innovation</li>
            </ol>
        </ul>
      </article>
      </section>
  )
}

export default Specialties