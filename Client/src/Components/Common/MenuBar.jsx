import React, { useState } from 'react'
import ReactIcon from '../../Store/ReactIcon';

const MenuBar = ({className,onClick}) => {
    const [show,setShow] = useState(false)

    return (
      <>

      <button onClick={onClick} >  
            {!show ? 
            (<ReactIcon  className={className} onClick={()=>setShow(true)}  size={25} name='HamMenu' />) 
            :(<ReactIcon className={className}  onClick={()=>setShow(false)}  size={25} name="ArrowSquarClose" />
          ) }
        </button>
      </>        
    )
}

export default MenuBar