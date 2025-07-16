import React from 'react'

const Input = ({type="text",placeholder,className}) => {
  return (
    <>
    <input type="text" className='border-2 border-gray-400 px-4 py-1.5 rounded outline-0 text-para-md text-text-secondary' placeholder={placeholder} />
    </>
  )
}

export default Input