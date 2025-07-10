import React from 'react'
import {HiringsHero} from '../Components/index'

const Hirigns = () => {

    const HiringsCont = [
        {
            title:"",
            para:"We’re on the lookout for passionate, creative, and driven individuals to join our growing team of innovators. If you thrive on building exceptional digital experiences and want to work in a collaborative, forward-thinking environment — we’d love to hear from you."
        },
        {
            title:"Why Work With us",
            para:"At our studio, you won’t just work on projects — you’ll help shape the future of digital experiences. We believe in empowering every team member with ownership, creativity, and autonomy. You’ll collaborate with designers, developers, and thinkers who are as passionate as you are."
        },
        {
            title:"Grow With Purpose",
            para:"We’re not just building products — we’re building careers. Whether you’re just starting out or bringing years of experience, you’ll have the space and support to evolve your skills, challenge yourself, and grow in a culture of continuous learning."
        },
        {
            title:"A Culture That Cares",
            para:"We care deeply about our people. From flexible schedules and remote options to mental wellness and skill development, we prioritize balance, inclusivity, and well-being. Your voice matters here, and your impact will be seen and celebrated."
        },
        {
            title:"What We Look For",
            para:"We hire for mindset, not just skillset. If you're curious, adaptable, and love solving meaningful problems, you’ll fit right in. We value people who challenge ideas, bring fresh perspectives, and believe in making things better — together."
        }
    ]
  return (
    <main>
        <HiringsHero/>
        <section>
            <article className='flex flex-col gap-6 list-none' >
                {HiringsCont.map((hiring,index)=>(
                    <li className='flex flex-col gap-2 '  key={index} >
                        <h2 className='text-3xl font-serif font-bold' >{hiring.title}</h2>
                        <p className='text-xl leading-7 ' >{hiring.para}</p>
                    </li>
                ))}
            </article>
        </section>
    </main>
  )
}

export default Hirigns