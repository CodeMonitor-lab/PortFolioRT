import React, { useState } from 'react'
import ReactIcon from '../../Store/ReactIcon';

const MenuBar = ({className,onClick}) => {
    const [show,setShow] = useState(false)

    return (
      <>
      <div className={className} onClick={onClick} >
            {!show ? 
            (<ReactIcon  className='text-white border-2 p-1 rounded-full'  onClick={()=>setShow(true)}    size={40} name='HamMenu' />) 
            :(<ReactIcon className='text-red-700 border-2 p-1 rounded-full'  onClick={()=>setShow(false)}  size={40} name="ArrowSquarClose" />
          ) }
      </div>
      </>        
    )
}

export default MenuBar