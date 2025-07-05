import React from 'react'
import test from '../test.json'

const WeDo = () => {
  return (
     <main className="min-w-full py-5 px-4 ">
            <div>
             <p className=" sm:text-left text-center text-2xl pb-2 pt-5 font-black text-purple-950">{test.article_1.title}</p>
            </div>
            <article className=" grid grid-cols-1 sm:grid-cols-2" >
            <div>
              <h1 className=" sm:pb-0 pb-2 text-3xl sm:text-6xl text-purple-950 font-black font-serif leading-10 sm:leading-16  ">{test.article_1.heading}</h1>
            </div>
             <div>
             <ul className='grid grid-cols-1 gap-2' >
             <p className="text-xl text-purple-950 font-bold pb-3 font-sans leading-6 sm:leading-9 " >{test.article_1.para1}</p>
             <p className="text-xl text-purple-950 font-bold pb-3 font-sans leading-6 sm:leading-9 " >{test.article_1.para2}</p>
             </ul>
             <button className=' mt-2 text-xl font-bold bg-blue-400 px-4 py-2 rounded-md' type="submit">Our Design</button>             
             </div>
            </article>
        </main>
  )
}

export default WeDo