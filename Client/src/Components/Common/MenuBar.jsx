import React, { useState } from 'react'
import ReactIcon from '../../Store/ReactIcon';
import useVisiblity from '../../hooks/useVisiblity';
import {Visible} from '../index'

const MenuBar = ({isVisible,toggle,className}) => {

    return (
      <div className={className} >
        {isVisible ? (
          <ReactIcon onClick={toggle} color={'red'} name='ArrowRoundClose' size={25} />
        ) : (
          <ReactIcon onClick={toggle} color={'white'}  name='HamMenu' size={25} />
        )  }
           
      </div>
    )
}

export default MenuBar