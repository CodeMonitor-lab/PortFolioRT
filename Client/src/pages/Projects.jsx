import React from 'react'
import {ProjectHero,ProjectCard} from '../Components/index'

const Projects = () => {
  return (
    <main>
        <ProjectHero/>
      <section className='flex flex-col gap-10 px-5 sm:px-20 py-10 sm:py-10 md:px-8 lg:px-30' >
        <ProjectCard/>
      </section>
    </main>
  )
}

export default Projects