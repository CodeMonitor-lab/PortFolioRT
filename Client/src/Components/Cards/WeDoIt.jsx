import React from 'react'
import test from '../test.json'

const WeDoIt = () => {
  return (
    <main className="min-w-full">
    <div>
     <p className=" sm:text-left text-center text-2xl font-black text-purple-950">{test.wedoit.title}</p>
    </div>
    <article className=" grid grid-cols-1 sm:grid-cols-2" >
    <div>
      <h1 className="text-3xl sm:text-7xl text-purple-950 font-bold font-serif leading-10 sm:leading-16  ">{test.wedoit.heading}</h1>
    </div>
     <div>
     <ul className='grid grid-cols-1' >
     <p className="text-xl text-purple-950 font-bold font-sans leading-6 sm:leading-9 " >{test.wedoit.para1}</p>
     <p className="text-xl text-purple-950 font-bold font-sans leading-6 sm:leading-9 " >{test.wedoit.para2}</p>
     </ul>
     <button className='text-xl font-bold bg-blue-400 rounded-md' type="submit">Ou Brands</button>             
     </div>
    </article>
</main>
  )
}

export default WeDoIt