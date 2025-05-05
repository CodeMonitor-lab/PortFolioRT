import React from 'react'
import {Input,ButtonSubmit} from '../index'

const Search = ({onClick}) => {
  return (
    <>
    <main>
      <section className='bg-sky-500'>
        <search className='flex items-center justify-center w-full' >
          <input className='border-3' placeholder='ask somethings..' type="text" />
          <ButtonSubmit btnText='Search' />
        </search>
      </section>
    </main>
    </>
  )
}

export default Search