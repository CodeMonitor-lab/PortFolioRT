import React from 'react'
import img from '../../assets/pirpgrad.png'

const OurWork = () => {
  return (
    <main>
        <h1 className='pb-7 text-purple-950 text-3xl font-black font-sans' >Latest Work</h1>
        <section className='flex gap-x-10 justify-center items-center' >
            <article>
                <div className='flex flex-col justify-center items-center min-w-md' >
                    <img className='rounded-md w-xs' src={img} alt="" />
                    <h1 className='text-2xl font-serif font-bold text-purple-950  pt-4' >Role Based Acess Control(RBAC)</h1>
                </div>
            </article>
            <article>
                <div className='flex flex-col justify-center items-center min-w-md' >
                    <img className='rounded-md w-sm' src={img} alt="" />
                    <h1 className='text-3xl font-bold font-sans text-purple-950  pt-4' >Blend-Bloom Blog Web </h1>
                </div>
            </article>
            <article>
                <div className='flex flex-col justify-center items-center min-w-md' >
                    <img className='rounded-md w-xs' src={img} alt="" />
                    <h1 className='text-2xl font-bold font-serif text-purple-950  pt-4' >Admin Dashboard</h1>
                </div>
            </article>
        </section>
        <div className='flex pt-10 items-center justify-center ' >
            <button className='text-2xl px-15 cursor-pointer rounded py-3 bg-amber-400 text-purple-950 font-sans font-light ' type="submit">View all Work</button>
        </div>
    </main>
  )
}

export default OurWork