import React,{Children, useState} from 'react'
import { FiSearch, FiX } from 'react-icons/fi';
import useVisiblity from '../hooks/useVisiblity'
import { Visible } from '../Components/index';

const Home = ({children,defaultVisible = false}) => {
  const {isVisible,toggle} = useVisiblity(defaultVisible)

  return (
    <>
    <h1>Home</h1>
    <button onClick={toggle} >Click</button>
    <Visible when={isVisible} >
      <div className='bg-amber-300 transform ease-in-out ' >
     <FiSearch/>
      </div>
    </Visible>
    </>
  )
}

export default Home