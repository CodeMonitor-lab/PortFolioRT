import React, { useState } from 'react'
import ReactIcon from '../../Store/ReactIcon';
import useVisiblity from '../../hooks/useVisiblity';
import {Visible} from '../index'

const MenuBar = ({isVisible,toggle,className}) => {

    return (
      <div className={className} >
        {isVisible ? (
          <ReactIcon className='border rounded-full' onClick={toggle} color={'red'} name='ArrowRoundClose' size={30} />
        ) : (
          <ReactIcon className='border rounded-full' onClick={toggle} color={'black'}  name='HamMenu' size={30} />
        )  }
           
      </div>
    )
}

export default MenuBar