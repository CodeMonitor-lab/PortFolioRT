import React from 'react'

const CardButton = ({type='submit',className,text,onClick}) => {
  return (
    <button className={`${className} || bg-amber-400 px-10 py-2 text-textColor-primary font-black rounded-md cursor-pointer text-xl `} type={type}>{text}</button>
  )
}

export default CardButton