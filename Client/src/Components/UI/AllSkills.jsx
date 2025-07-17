import React from 'react'
import Icons from '../../assets/Icons.json'

const AllSkills = () => {
  const skillCard={
    para:"Getting brands to work means going outside the guidelines, prioritizing tools over rules."
  }
  return (
    <main>
      <section className='' >
          <h1 className='pb-4 text-title-sm md:text-title-md font-black text-text-secondary' >All Experties</h1>
        <ul className=' grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-x-4 gap-y-4' >
          {
            Icons.map((Icon,index)=>(
              <ol className='bg-gray-50 shadow-sm shadow-zinc-400 p-4 rounded-md ' >
              <li className='grid gap-2'  key={index} >
                <img className="w-14 shadow-xs px-2 py-1 shadow-zinc-400 " src={Icon.img} alt="" />
                <span className='text-text-primary text-para-sm  font-bold' >{Icon.name}</span>
                <p className='text-text-primary'  >{skillCard.para}</p>
              </li>
              </ol>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default AllSkills