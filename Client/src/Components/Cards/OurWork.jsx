import React from 'react'
import img from '../../assets/pirpgrad.png'

const OurWork = () => {
    const carosual = [
        {
            para:"Role Based Access Control",
            img:{img},
        }
    ]
    console.log(carosual)
  return (
    <main>
        <h1 className='text-purple-950 text-3xl font-black font-sans' >Latest Work</h1>
        <section className='flex' >
            <article>
                <div className='flex flex-col min-w-md' >
                    <img className='rounded-md w-xs' src={img} alt="" />
                    <h1 className='text-xl font-serif font-bold text-purple-950' >Role Based Acess Control(RBAC)</h1>
                </div>
            </article>           
        </section>
        <div className='flex items-center justify-center ' >
            <button className='text-2xl cursor-pointer rounded bg-amber-400 text-purple-950 font-sans font-light ' type="submit">View all Work</button>
        </div>
    </main>
  )
}

export default OurWork