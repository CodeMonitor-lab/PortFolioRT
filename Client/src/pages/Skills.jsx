import React from 'react'
import {AllSkills,SkillHero} from '../Components/index'

const Skills = () => {
  return (
    <main>
      <SkillHero/>
      <section className='flex flex-col gap-10 px-5 sm:px-20 py-10 sm:py-10 md:px-8 lg:px-30' >
      <AllSkills/>
      </section>
    </main>
  )
}

export default Skills