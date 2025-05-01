import React from 'react'

const ButtonSubmit = ({btnText,onClick,type,className}) => {
  return (
    <>
    <button className={`${className} || border-none outline-none cursor-pointer bg-blue-500 p-2 font-bold text-white`} onClick={onClick} type={type} >{btnText}</button>
    </>
  )
}

export default ButtonSubmit