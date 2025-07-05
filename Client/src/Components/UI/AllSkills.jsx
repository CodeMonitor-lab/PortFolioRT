import React from 'react'
import Icons from '../../assets/Icons.json'

const AllSkills = () => {
  console.log(Icons)

  return (
    <main>
      <section>
        <ul className='flex flex-wrap justify-center items-center gap-x-10 gap-y-10' >
          {
            Icons.map((Icon,index)=>(
              <li key={index} >
                <img className="w-14" src={Icon.img} alt="" />
                <p>{Icon.name}</p>
                {/* <p>{Icon.img}</p> */}
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default AllSkills