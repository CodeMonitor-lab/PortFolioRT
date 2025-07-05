import React from 'react'
import notfoundImg from '../assets/notfound.svg'

const PageNotFound = () => {
  return (
    <section className='flex items-center justify-center' >
      <img  className='' src={notfoundImg} alt="page not found" />
    </section>
  )
}

export default PageNotFound