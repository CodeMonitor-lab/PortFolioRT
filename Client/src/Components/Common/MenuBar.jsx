import React, { useState } from 'react'
import ReactIcon from '../../Store/ReactIcon';
import useVisiblity from '../../hooks/useVisiblity';
import {Visible} from '../index'

const MenuBar = ({isVisible,toggle,className}) => {

    return (
      <div className={className} >
        {isVisible ? (
          <ReactIcon onClick={toggle} color={'darkred'} name='ArrowRoundClose' size={30} />
        ) : (
          <ReactIcon onClick={toggle} color={'purple'}  name='HamMenu' size={35} />
        )  }
           
      </div>
    )
}

export default MenuBar