import React from 'react'
import test from '../test.json'
import {CardButton} from '../index'

const WeDo = () => {
  return (
     <main className="min-w-full">
      <section>
       <article >
        <p className="text-text-primary text-title sm:text-left text-center text-title-size font-black">{test.article_1.title}</p>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-20 ' >
        <h1 className="text-heading sm:text-heading text-text-primary font-black font-primary leading-10 sm:leading-16  ">{test.article_1.heading}</h1>
        <ul className='grid grid-cols-1 gap-2' >
          <div>
          <p className="text-paragraph text-text-primary font-bold font-secondary leading-6 sm:leading-9 " >{test.article_1.para1}</p>
          <p className="text-paragraph  text-text-primary font-bold font-secondary leading-6 sm:leading-9 " >{test.article_1.para2}</p>
          </div>
        <div>
        <CardButton text="Our Design" />
        </div>
        </ul>
        </div>
       </article>
      </section>
        </main>
  )
}

export default WeDo