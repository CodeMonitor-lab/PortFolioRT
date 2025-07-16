import React from 'react'

const ButtonSubmit = ({btnText,onClick,type,className}) => {
  return (
    <>
    <button className={`border-none outline-none cursor-pointer bg-sky-700 py-2 rounded-md px-7 font-bold text-para-sm text-green-200`} onClick={onClick} type={type} >{btnText}</button>
    </>
  )
}

export default ButtonSubmit