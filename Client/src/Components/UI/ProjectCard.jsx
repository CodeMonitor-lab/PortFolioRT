import React from 'react'
import workImg from '../../assets/work.png'
import {ButtonSubmit} from '../index'

const ProjectCard = () => {
    const artilce= [
        {
            img:workImg,
            heading:"Role Based Acess Control{RBAC)",
            para:"Creating a Role-Based-User-Authentication and User-Autharization using with MongoDB, Express, React, Node-js ",
        },
        {
            img:workImg,
            heading:"Simple Blog-App",
            para:"Building Responsive design and full functional MERN Bloggin Website with CRUD Admin Panel to manage posts and day to day tasks "
            
        },
        {
            img:workImg,
            heading:"Authentication and Autharization",
            para:"Building Full Stack User Authentication and Autharization using helps of MongoDB,Express js,Node js, Fornted library like React js "
        },
        {
            img:workImg,
            heading:"TwillioVerification",
            para:"Building an account confirmation password generator using with twilio one time password or whatsapp messaging in programable ",
        },
        {
            img:workImg,
            heading:"Nextjs Blend-Bloom-Blog",
            para:" Blend-Bloom Blog A modern, multi-topic blog template built with Next.js, Tailwind CSS, and Contentlayer. Supports MDX, dark mode, SEO, code highlighting, and more. Perfect for developers, writers…"
        }
    ]

  return (
    <main>
        <section>
            <article>
                <h1 className='text-title-md text-text-primary font-black pb-4' >Our Works</h1>
                <ul className='grid lg:grid-cols-3 md:grid-cols-3 gap-10'  >
                {artilce.map((item,index)=>(
                    <ol className=' shadow-md shadow-gray-400 grid p-4 gap-4' key={index} >
                        <li className='flex flex-col gap-2' >  
                            <img className=' shadow-md h-70 ' src={item.img} alt="" />
                            <p className='text-para-md text-text-primary underline underline-offset-4 font-black font-serif ' >{item.heading}</p>
                            <p className='text-para-sm text-text-primary font-light ' >{item.para}</p>
                        </li>
                        <li className='flex flex-row gap-3' > 
                            <ButtonSubmit btnText="Live preview" />
                            <ButtonSubmit btnText="Source Code" />
                        </li>
                    </ol>
                ))}
                </ul>
            </article>
        </section>
    </main>
  )
}

export default ProjectCard