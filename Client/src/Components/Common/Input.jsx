import React from 'react'

const Input = ({type="text",placeholder,className}) => {
  return (
    <>
    <input type="text" className={className} placeholder={placeholder} />
    </>
  )
}

export default Input