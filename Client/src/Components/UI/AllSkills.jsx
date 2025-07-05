import React from 'react'
import assets from '../../assets/index'

const AllSkills = () => {
  return (
    <main>
      <section>
        <ul>
          {
            assets.map((skills,index)=>(
              <li>
              <img src={assets.html} alt="" />
            </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default AllSkills